
import "./globals.css";

export const metadata = {
    title: "Twórczość Taco Hemingwaya",
    description: "Autorzy: Tomek Łabedzki, Oskar Syrek",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <body
                className={` antialiased font-[JetBrains_Mono]`}>
                {children}
            </body>
        </html>
    );
}
