import tornado.ioloop
import tornado.web
import asyncio
import random

class TemperatureHandler(tornado.web.RequestHandler):
    async def get(self):
        # Simuliere eine Async-Operation (z. B. eine Datenbankabfrage)
        await asyncio.sleep(1)
        self.set_header("Content-Type", "application/json")
        self.write({"temperature": random.uniform(-43, -42)})

def make_app():
    return tornado.web.Application([
        (r"/get_temperature", TemperatureHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8889)
    print("Server running at http://localhost:8889/temperature")
    tornado.ioloop.IOLoop.current().start()
