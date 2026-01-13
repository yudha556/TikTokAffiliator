import { Instagram, Youtube, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aldi Nur Cahyono. All rights reserved.
        </div>

        {/* Right */}
        <div className="flex gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-5 h-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="w-5 h-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
