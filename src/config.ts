import dotenv from 'dotenv';
import winston from 'winston';

dotenv.config({});

class Config {
  public NODE_ENV: string | undefined;
  public COOKIE_KEY_ONE: string | undefined;
  public COOKIE_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV;
    this.COOKIE_KEY_ONE = process.env.COOKIE_KEY_ONE;
    this.COOKIE_KEY_TWO = process.env.COOKIE_KEY_TWO;
    this.CLIENT_URL = process.env.CLIENT_URL;
  }

  public createLogger(name: string): winston.Logger {
    return winston.createLogger({
      defaultMeta: { service: name },
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint()
      ),
      transports: [new winston.transports.Console()],
    });
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
      }
    }
  }
}

export const config = new Config();
