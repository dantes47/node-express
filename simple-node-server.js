const http = require('http');
const server = http.createServer((req, res) => {
    (req.url === '/') ?
        (res.end(`
                    <div style="text-align: center;">
                        <h2>This is our main page.</h2>
                        <p><a href="/about">About..</a></p>
                    </div>
                `)) :
            (req.url === '/about') ?
                (res.end(`
                            <div style="text-align: center;">
                                <h2>This our about page.</h2>
                                <p><a href="/">Home..</a></p>
                            </div>
                        `)) :
                    (res.end(`
                                <div style="text-align: center;">
                                    <h2>Ooops! ..We don't have it in here..)</h2>
                                    <p><a href="/">Home..</a></p>
                                </div>
                            `));
});

server.listen(3030);
