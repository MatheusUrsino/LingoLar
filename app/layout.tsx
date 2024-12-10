import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";

const fontSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

const fontMono = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "LingoLar",
  description: "Criado pela Equipe Noolar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <head>
          <link rel="icon" href="/logo.svg" />
        </head>
        <body
          className={`antialiased ${fontSans.className} ${fontMono.className}`}
        >
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />

          {/* Adicionando o GTranslate aqui */}

          {children}
          <script
            src="https://cdn.userway.org/widget.js"
            data-account="FTLIBwdhM1"
          ></script>
          <div className="gtranslate_wrapper"> </div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.gtranslateSettings = {
                  default_language: "pt",
                  native_language_names: true,
                  detect_browser_language: true,
                  languages: ["pt", "es", "en", "ca", "de", "it", "fr", "ru", "de"],
                  globe_color: "#F6794A",
                  wrapper_selector: ".gtranslate_wrapper",
                  horizontal_position: "right",
                  vertical_position: "bottom",
                  alt_flags: { pt: "brazil" },
                };
              `,
            }}
          ></script>
          <script
            src="https://cdn.gtranslate.net/widgets/latest/globe.js"
            defer
          ></script>

          
        </body>
      </html>
    </ClerkProvider>
  );
}
