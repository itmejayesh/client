import {TodoProvider} from "@/store/todo";
import "./globals.css";
import {Inter} from "next/font/google";
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={` ${inter.className}`}>
				<TodoProvider>{children}</TodoProvider>
				<Toaster />
			</body>
		</html>
	);
}
