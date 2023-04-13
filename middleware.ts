// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader) {
    return NextResponse.redirect(new URL('/', request.url)) 
  }
  return NextResponse
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/cart',
}