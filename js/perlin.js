function perlinNoise(canvas, baseX, baseY, rand) {
    var ctx = canvas.getContext('2d');
    var imagedata = ctx.createImageData(canvas.width, canvas.height);
    var data = imagedata.data;

    var simplexR = new SimplexNoise(rand);
    var simplexG = new SimplexNoise(rand);
    var simplexB = new SimplexNoise(rand);

    var pos, cr, cg, cb, gray;
    for (var y = 0; y < canvas.height; y ++) {
        for (var x = 0; x < canvas.width; x ++) {
            pos = (x + y * canvas.width) * 4;

            cr = Math.floor(((simplexR.noise(x / baseX, y / baseY) + 1) * 0.5) * 255);
            cg = Math.floor(((simplexG.noise(x / baseX, y / baseY) + 1) * 0.5) * 255);
            cb = Math.floor(((simplexB.noise(x / baseX, y / baseY) + 1) * 0.5) * 255);

            gray = (cr + cg + cb) / 3;

            data[pos + 0] = gray;
            data[pos + 1] = gray;
            data[pos + 2] = gray;
            data[pos + 3] = 255;
        }
    }

    ctx.putImageData(imagedata, 0, 0);
    return imagedata;
};