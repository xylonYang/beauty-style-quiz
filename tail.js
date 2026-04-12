    link.download = "颜值人格报告-" + r.type + ".png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  img.onerror = function() {
    var px = 400, py = 220, pr = 100;
    ctx.font = "100px serif";
    ctx.fillText("🎭", 400, 240);
    ctx.font = "bold 58px PingFang SC, Microsoft YaHei";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(r.type, 400, 365);
    ctx.fillText(r.title, 400, 415);
    var comp = compliments[key];
    var compLines = wrapText(ctx, comp, 640, 24);
    var ly = 545;
    for (var ci = 0; ci < Math.min(compLines.length, 5); ci++) {
      ctx.font = "24px PingFang SC, Microsoft YaHei";
      ctx.fillStyle = "rgba(255,255,255,0.78)";
      ctx.textAlign = "center";
      ctx.fillText(compLines[ci], 400, ly);
      ly += 44;
    }
  };
  img.src = r.img;
}
</script>
</body>
</html>