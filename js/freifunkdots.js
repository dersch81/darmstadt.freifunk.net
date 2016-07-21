(function() {
    var width, height, largeHeader, canvas, ctx, target, startTime;
    var animateHeader = true;
    var selector = '.freifunkdots';

    $(document).ready(function() {
      startTime = (new Date()).getTime();

      if ($(selector).length === 0) return;

      var canvasJq = $("<canvas />");
      $(selector).append(canvasJq);
      canvas = canvasJq[0];
      ctx = canvas.getContext('2d');
      resizeCanvas();

      circles = createCircles();

      for(var i in circles) {
        shiftCircle(circles[i]);
      }

      animate();

      // Event handling
      if(!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }

      window.addEventListener('scroll', function(){
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
      });

      window.addEventListener('resize', resizeCanvas);
    });

    function resizeCanvas() {
      width = $(selector).outerWidth();
      height = $($(selector).parents()[0]).outerHeight();
      target = {x: width/2, y: height/2};
      canvas.width = width;
      canvas.height = height;
    }

    function createCircles() {
      // create the circles
      var circles = [];
      for(var x = 0; x < width + 200; x = x + 80) {
        for(var y = height/2; y < height; y = y + 80) {
          var px = x + Math.random()*20;
          var py = y + Math.random()*20;
          circles.push(new Circle({x: px, y: py}, 5+Math.random()*2));
        }
      }

      return circles;
    }

    function animate() {
      if(animateHeader) {
        ctx.clearRect(0, 0, width,height);
        for(var i in circles) {
          var c = circles[i];

          var offsetX = ((new Date()).getTime()-startTime)/1000/20*width;
          if (c.pos.x+c.offset.x-offsetX < -100) {
            c.offset.x += width + 200;
          }

          // detect points in range
          var screenPos = {
            x: c.pos.x + c.offset.x - offsetX,
            y: c.pos.y + c.offset.y
          };

          if(Math.abs(getDistance(target, screenPos)) < 4000) {
            c.opacity = 1;
          } else if(Math.abs(getDistance(target, screenPos)) < 20000) {
            c.opacity = 0.6;
          } else {
            c.opacity = 0.4;
          }

          for(var dist = 1; dist < 3; dist++) {
            var j = (parseInt(i)+dist+circles.length)%circles.length;
            var lineFromX = c.pos.x + c.offset.x - offsetX;
            var lineToX = circles[j].pos.x + circles[j].offset.x - offsetX;

            if (Math.abs(lineFromX-lineToX) < 300) {
              ctx.beginPath();
              ctx.moveTo(lineFromX, c.pos.y);
              ctx.lineTo(lineToX,
                         circles[j].pos.y);
              ctx.strokeStyle = 'rgba(246, 0, 115,'+ c.opacity +')';
              ctx.stroke();
            }
          }

          c.draw(offsetX);
        }
      }

      requestAnimationFrame(animate);
    }

    function Circle(pos, rad, color) {
      var _this = this;

      // constructor
      (function() {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
        _this.offset = {x: 0, y: 0};
      })();

      this.draw = function(offsetX) {
        ctx.beginPath();
        ctx.arc(
          _this.pos.x+_this.offset.x-offsetX, _this.pos.y,
          _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(246, 0, 115,'+ _this.opacity +')';
        ctx.fill();
      };
    }

    function shiftCircle(c) {
      TweenLite.to(c.pos, 3+1*Math.random(), {
        x: c.pos.x-50+Math.random()*100,
        y: 0.75*height-60+Math.random()*130,
        ease: Circ.easeInOut,
        onComplete: function() {
          shiftCircle(c);
        }
      });
    }

    function mouseMove(e) {
      var posx = 0, posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx - $(selector).offset().left;
      target.y = posy - $(selector).offset().top;
    }

    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
})();
