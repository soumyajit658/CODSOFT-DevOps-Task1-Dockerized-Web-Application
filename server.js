const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CodSoft DevOps | Dockerized Application</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            min-height: 100vh;
            background: linear-gradient(135deg, #0f172a, #1e293b, #0f766e);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px;
        }

        .container {
            width: 100%;
            max-width: 950px;
        }

        .card {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 24px;
            padding: 50px;
            backdrop-filter: blur(15px);
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
        }

        .badge {
            display: inline-block;
            background: rgba(56, 189, 248, 0.15);
            border: 1px solid rgba(56, 189, 248, 0.4);
            color: #7dd3fc;
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 25px;
        }

        h1 {
            font-size: clamp(38px, 6vw, 64px);
            line-height: 1.05;
            margin-bottom: 20px;
        }

        h1 span {
            color: #38bdf8;
        }

        .subtitle {
            font-size: 20px;
            line-height: 1.6;
            color: #cbd5e1;
            max-width: 700px;
            margin-bottom: 35px;
        }

        .status {
            display: flex;
            align-items: center;
            gap: 12px;
            background: rgba(34, 197, 94, 0.12);
            border: 1px solid rgba(34, 197, 94, 0.3);
            padding: 14px 18px;
            border-radius: 12px;
            width: fit-content;
            margin-bottom: 40px;
        }

        .dot {
            width: 11px;
            height: 11px;
            background: #22c55e;
            border-radius: 50%;
            box-shadow: 0 0 12px #22c55e;
        }

        .status-text {
            color: #86efac;
            font-weight: bold;
        }

        .tech-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 40px;
        }

        .tech-card {
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 22px;
            transition: transform 0.2s ease, background 0.2s ease;
        }

        .tech-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.1);
        }

        .icon {
            font-size: 30px;
            margin-bottom: 12px;
        }

        .tech-card h3 {
            margin-bottom: 7px;
            font-size: 17px;
        }

        .tech-card p {
            color: #94a3b8;
            font-size: 14px;
        }

        .task-info {
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            padding-top: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .task-info p {
            color: #94a3b8;
        }

        .task-number {
            color: white;
            font-weight: bold;
        }

        .footer {
            text-align: center;
            margin-top: 25px;
            color: #64748b;
            font-size: 13px;
        }

        @media (max-width: 700px) {
            .card {
                padding: 30px 22px;
            }

            .tech-grid {
                grid-template-columns: 1fr;
            }

            h1 {
                font-size: 42px;
            }

            .subtitle {
                font-size: 17px;
            }
        }
    </style>
</head>

<body>

    <div class="container">

        <div class="card">

            <div class="badge">
                🚀 CODSOFT DEVOPS INTERNSHIP
            </div>

            <h1>
                Dockerized<br>
                <span>Web Application</span>
            </h1>

            <p class="subtitle">
                A simple Node.js web application successfully containerized and running with Docker.
            </p>

            <div class="status">
                <div class="dot"></div>
                <div class="status-text">
                    Application Running Successfully
                </div>
            </div>

            <div class="tech-grid">

                <div class="tech-card">
                    <div class="icon">🐳</div>
                    <h3>Docker</h3>
                    <p>Application containerization and deployment</p>
                </div>

                <div class="tech-card">
                    <div class="icon">🟢</div>
                    <h3>Node.js</h3>
                    <p>JavaScript runtime powering the server</p>
                </div>

                <div class="tech-card">
                    <div class="icon">⚡</div>
                    <h3>Express</h3>
                    <p>Lightweight framework for the web server</p>
                </div>

            </div>

            <div class="task-info">
                <p>
                    Internship Project:
                    <span class="task-number">
                        Task 1 — Dockerized Web Application
                    </span>
                </p>

                <p>
                    Port:
                    <span class="task-number">3000</span>
                </p>
            </div>

        </div>

        <div class="footer">
            Built for learning DevOps • CodSoft Internship
        </div>

    </div>

</body>
</html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});