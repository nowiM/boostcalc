import Nav from "./components/Nav";
import NavLink from './components/NavLink'
import "./globals.css";

const RootLayout = ({ children }) => {
  const themeScript = `
    (function() {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    })();
  `;
  return (
    <html>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content="복리 계산기 웹사이트에서 투자에 따른 미래 가치를 예측하고, 적금, 주식, 코인 투자 시 예상 수익을 계산해보세요. 간편한 사용법과 실시간 계산으로 복리 효과를 쉽게 확인할 수 있습니다." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="복리 계산기, 적립식 복리 계산기, 투자 수익률 계산기, 금융 계산기, 주식 복리, 코인 복리, 장기 투자, 예금 계산기, 주식 투자, 코인 투자, 금융 복리, 복리 이자율, 자산 증식, 복리 효과, 미래 가치 계산기" />
        <meta property="og:title" content="복리 계산기 - 간편한 투자 수익 예측 도구 | compound" />
        <meta property="og:description" content="복리 계산기를 통해 예금, 주식, 코인 등의 투자 수익률을 쉽게 계산하고, 미래 수익을 예측하세요. 간편한 인터페이스로 투자 결정을 돕습니다." />
        <meta name="google-site-verification" content= {process.env.NEXT_PUBLIC_SEARCH_CONSOLE} />
        <meta name="google-adsense-account" content= {process.env.NEXT_PUBLIC_ADSENS}></meta>
        <title>복리 계산기 - compound</title>
        <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_ADSENS_SCRIPT}`}
        crossorigin="anonymous"></script>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav/>

        <div className="body-container">
          <div className="mode-selector">
            <NavLink href="/default">기본</NavLink>
            <NavLink href="/saving">적립식</NavLink>
          </div>

          {children}
        </div>
        <div className="footer">
          <span className="footer-item">© 2024 boostcalc All right reserved</span>
          <span className="footer-item">✉️ contact : iimerty35@gmail.com</span>
          <span className="footer-item">© Icons by Icons8</span>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;