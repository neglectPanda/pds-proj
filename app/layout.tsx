import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Personal Data Sheet</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/1.png" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
