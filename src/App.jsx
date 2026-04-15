import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
function App() {
  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8fafc",
        color: "#1e293b",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "linear-gradient(135deg, #0f172a, #334155)",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <img
          src="https://via.placeholder.com/140"
          alt="תמונה אישית"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
            border: "4px solid white",
          }}
        />
        <h1 style={{ margin: "0 0 10px", fontSize: "42px" }}>גילה</h1>
        <p
          style={{
            margin: 0,
            fontSize: "20px",
            maxWidth: "700px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          סטודנטית למערכות מידע עם עניין בעולם הדיגיטל, הטכנולוגיה, הלמידה
          וההתפתחות האישית.
        </p>
      </header>

      <main
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}
      >
        <section
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "25px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>עליי</h2>
          <p style={{ lineHeight: "1.9", fontSize: "18px" }}>
            אני אוהבת ללמוד, ליצור ולהתפתח כל הזמן. חשוב לי לשלב בין חשיבה
            אנליטית, יצירתיות, התמדה ורצון אמיתי להתקדם. האתר הזה נועד להציג
            אותי, את הכישורים שלי, את תחומי העניין שלי ואת הדברים שחשובים לי.
          </p>
        </section>

        <section
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "25px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>כישורים</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "15px",
            }}
          >
            {[
              "מערכות מידע",
              "SQL",
              "React",
              "JavaScript",
              "למידה עצמאית",
              "עבודה עם אנשים",
              "כתיבה והצגה",
              "חשיבה אנליטית",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#e2e8f0",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  fontSize: "16px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "25px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>תחביבים ותחומי עניין</h2>
          <ul
            style={{ lineHeight: "2", fontSize: "18px", paddingRight: "20px" }}
          >
            <li>מוזיקה ושירה</li>
            <li>עולם הדיגיטל והטכנולוגיה</li>
            <li>למידה והתפתחות אישית</li>
            <li>יצירה ועיצוב</li>
          </ul>
        </section>

        <section
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "25px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>הישגים / פרויקטים</h2>
          <div style={{ display: "grid", gap: "16px" }}>
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "14px",
                padding: "18px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3 style={{ marginTop: 0 }}>פרויקט 1</h3>
              <p style={{ marginBottom: 0, lineHeight: "1.8" }}>
                כאן אפשר לכתוב על פרויקט לימודי, אתר שבנית, עבודה מעניינת או
                הישג חשוב.
              </p>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "14px",
                padding: "18px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3 style={{ marginTop: 0 }}>פרויקט 2</h3>
              <p style={{ marginBottom: 0, lineHeight: "1.8" }}>
                כאן אפשר להוסיף עוד משהו שמציג אותך ואת מה שעשית.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#0f172a",
            color: "white",
            borderRadius: "18px",
            padding: "30px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>יצירת קשר</h2>
          <p>אינסטגרם: @yourusername</p>
          <p>אימייל: yourmail@example.com</p>
          <p style={{ marginBottom: 0 }}>LinkedIn: linkedin.com/in/yourname</p>
        </section>
      </main>
    </div>
  );
}

export default App;
