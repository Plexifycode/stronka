import "./globals.css";

export const metadata = {
    title: "Dyskografia Taco Hemingway'a",
    description: "Stworzone przez Tomka Łabędzkiego i Oskara Syrka",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <body
                className={`antialiased font-[JetBrains_Mono]`}>
                {children}
            </body>
        </html>
    );
}
