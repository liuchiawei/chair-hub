export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} リュウ チャーウェイ
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}