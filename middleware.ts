//import { NextResponse } from "next/server"
//import type { NextRequest } from "next/server"

//export function middleware(request: NextRequest) {
  // Obtener la IP del cliente
  //const clientIP = request.ip || request.headers.get("x-forwarded-for") || "unknown"

  // Lista de IPs permitidas (reemplaza con tu IP real)
  //const allowedIPs = [
   // "127.0.0.1",
    //"localhost",
    // Agrega tu IP real aquí
    // '192.168.1.100', // Ejemplo de IP local
  //]

  // Verificar si la IP está en la lista permitida
  //const isAllowed =
   // allowedIPs.some((ip) => clientIP.includes(ip)) ||
    //clientIP === "unknown" || // Para desarrollo local
    //process.env.NODE_ENV === "development"

  //if (!isAllowed) {
    // Retornar página de acceso denegado
    //return new NextResponse(
     // `
      //<!DOCTYPE html>
     // <html>
       // <head>
       //   <title>Acceso Denegado</title>
        //  <style>
        //    body {
           //   background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d1b69 100%);
           //   color: white;
            //  font-family: 'Dancing Script', cursive;
            //  display: flex;
            //  justify-content: center;
           //   align-items: center;
           //   height: 100vh;
           //   margin: 0;
           //   text-align: center;
           // }
           // .container {
           //   background: rgba(255, 255, 255, 0.05);
            //  backdrop-filter: blur(10px);
            //  border: 1px solid rgba(255, 255, 255, 0.1);
            //  border-radius: 15px;
            //  padding: 40px;
            //  animation: fadeIn 1s ease-in-out;
          //  }
           // @keyframes fadeIn {
           //   from { opacity: 0; transform: translateY(20px); }
          //    to { opacity: 1; transform: translateY(0); }
          //  }
           // .heart {
            //  font-size: 4rem;
            //  color: #dc2626;
             // animation: pulse 2s infinite;
           // }
           // @keyframes pulse {
           //   0%, 100% { transform: scale(1); }
           //   50% { transform: scale(1.1); }
          //  }
          //</style>
       // </head>
       // <body>
        //  <div class="container">
       //     <div class="heart">💔</div>
       //     <h1>Acceso Denegado</h1>
       //     <p>Esta página es privada y solo está disponible para su propietario.</p>
        //    <p>No tienes permisos para acceder a este contenido.</p>
        //  </div>
       // </body>
     // </html>
    //  `,
    //  {
     //   status: 403,
     //   headers: {
    //      "Content-Type": "text/html",
    //    },
    //  },
  //  )
//  }

  //return NextResponse.next()
//}

//export const config = {
 // matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
  //  "/((?!api|_next/static|_next/image|favicon.ico).*)",
//  ],
//}
