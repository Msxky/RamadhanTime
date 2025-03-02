:root {
  --bg-color: #161616;
  --text-color: #EAEAEA;
  --card-bg: #1b1b1b;
  --shadow: 10px 10px 30px rgba(0, 255, 255, 0.3), 
            -10px -10px 30px rgba(255, 0, 255, 0.3);
  --shadow-inset: inset 5px 5px 15px rgba(0, 255, 255, 0.2),
                  inset -5px -5px 15px rgba(255, 0, 255, 0.2);
  --glass-blur: blur(10px);
  --neon-border: 2px solid rgba(0, 255, 255, 0.8);
}

.dark-mode {
  --bg-color: #d6d6d6;
  --text-color: #111111;
  --card-bg: #EAEAEA;
  --shadow: 10px 10px 40px rgba(255, 0, 255, 0.4), 
            -10px -10px 40px rgba(0, 255, 255, 0.4);
  --shadow-inset: inset 5px 5px 15px rgba(255, 0, 255, 0.3),
                  inset -5px -5px 15px rgba(0, 255, 255, 0.3);
  --neon-border: 2px solid rgba(255, 0, 255, 0.8);
}

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            /* transition: all 0.3s ease; */
        }

        a{
          font-weight: 600;
          color: var(--neon-border);
          text-shadow: var(--shadow);
          text-decoration: none;
          /* font-style: italic; */
        }

        span{
          font-weight: 600;
          text-shadow: var(--shadow);
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .glass-card {
            background: var(--card-bg);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 20px;
            box-shadow: var(--shadow);
            margin-bottom: 20px;
            overflow-x: auto;
          }

          .glass-card::-webkit-scrollbar{
            display: none;
          }
          
          .controls {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        select, button {
            padding: 12px 20px;
            border: none;
            border-radius: 10px;
            background: var(--card-bg);
            color: var(--text-color);
            box-shadow: var(--shadow);
            cursor: pointer;
        }

        button:active {
            box-shadow: var(--shadow-inset);
        }

        .loading {
            display: none;
            text-align: center;
            padding: 20px;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--text-color);
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            background: var(--card-bg);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow-inset);
          }
          
          th, td {
            padding: 12px;
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          
          .current-time {
          text-shadow: var(--shadow);
            text-align: center;
            font-size: 1.6em;
            font-weight: 800;
            margin: 20px 0 0 0;
        }

        .current-date{
          text-shadow: var(--shadow);
            text-align: center;
            font-size: 1em;
            font-weight: 800;
            margin: 0 0 20px 0;
        }

        footer{
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 12px;
          padding: 0 2px;
        }

        @media (max-width: 768px) {
            .controls {
                flex-direction: column;
            }
            
            table {
                font-size: 14px;
            }
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }
