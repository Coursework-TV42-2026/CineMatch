import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const publicRoutes = new Set<string>(['/', '/reset-password']);
const authRoutes = new Set<string>(['/sign-in', '/sign-up', '/reset-password/email']);

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;
  const pathname = request.nextUrl.pathname;

  // User already authenticated and trying to access auth routes
  if (user && authRoutes.has(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.search = '';

    return NextResponse.redirect(url);
  }

  // If user is not authenticated and trying to access private routes, redirect to sign-in
  if (!user && !publicRoutes.has(pathname) && !authRoutes.has(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/sign-in';

    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
