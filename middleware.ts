import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks/stripe",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return; // Se for uma rota pública, não faz nada

  // Obter o userId a partir da autenticação
  const { userId } = await auth();

  // Verificar se o usuário não está autenticado
  if (!userId) {
    return new Response('Unauthorized', { status: 401, headers: { 'Location': '/sign-in' } });
  }

  // Se o usuário estiver autenticado, continuar
  auth.protect(); // Exige autenticação para outras rotas
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
