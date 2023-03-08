# Notes from the course

## Section 2: Animating Properties

1. Opacity 0 (meaning hidden) and 1 being completely visible.
2. Anything in between 0 and 1 will add transparency.
3. Translations operate like a grid, where 0,0 is the top left
   of the element. The Y piece will operate on the Y axis, go up and
   down/move top to bottom. The X will operate on X axis, go left to right.
4. In order to move up and or left (depending on the axis) we need
   to move negatively. If we want to move down or right we need to
   move positively.
5. The scale will transform from the center of the element. That means if you
   scale X it will scale on the left/right sides evenly.
6. Animating width and height values will effect layout
7. Style property 'width' and 'height' is not supported by native animated module
8. Animating width and height values will effect layout.
9. Interpolation is a method of constructing data points from within a range
   of a discrete set of known data points. What that means is given a value and
   at least 2 other numbers we can figure out where in the range we are.
10. This is great for deriving animations from a single animated value.
    When interpolating it allows us to connect animations. When the animations
    are connected with interpolate it requires you to control a singular value
    and drive a range of animations. Meaning less work for us, and better animations.
11. An example of this would be a Modal. With a singular Animated.Value and
    interpolation you could connect the opacity, and position of the modal. This
    would allow you to have the exact same animation forwards, and operate in reverse.
    Interpolations can be extremely powerful to use.
12. Using animated for colors will work for rbg/rgba/hcl/ and now even hex colors.
13. Rotation also requires you to use interpolate because the rotation transform
    properties must be given a value in degrees, or in radians.
14.

---

# Animation Images

1. Opacity Animation
<div>
    <img  src="https://static.wixstatic.com/media/e71421_65b65dff7dd84f2791b46312df7beb1a~mv2.gif"  alt= “Opacity animation gif”  width="200"  height="400" />
</div>

2. Translate Animation
<div> 
    <img  src="https://static.wixstatic.com/media/e71421_ec41c983469a463cbf89d41d3880eb35~mv2.gif"  alt= “Translate animation gif”  width="200"  height="400" />
</div>

3. Scale Animation
<div>
    <img  src="https://static.wixstatic.com/media/e71421_462348178bc94e6c97999973c958c92a~mv2.gif"  alt= “Scale animation gif”  width="200"  height="400" />
</div>

4. Width/Height Animation
<div>
    <img  src="https://static.wixstatic.com/media/e71421_168bcde5c91d469cae16b64ff1f1e4c4~mv2.gif"  alt= “Width/Height animation gif”  width="200"  height="400" />
</div>

5. Absolute Position Animation
<div>
    <img  src="https://static.wixstatic.com/media/e71421_08eb1805425f406a90d58dd28436f3d4~mv2.gif"  alt= “Absolute position animation gif”  width="200"  height="400" />
</div>

6. Color Interpolation Animation
<div>
    <img  src="https://static.wixstatic.com/media/e71421_08eb1805425f406a90d58dd28436f3d4~mv2.gif"  alt= “Color interpolation gif”  width="200"  height="400" />
</div>

7. Rotation Animation
<div>
    <img  src="https://static.wixstatic.com/media/e71421_a385dea497ed43168c03a3f17c61948e~mv2.gif"  alt= “Rotation animation gif”  width="200"  height="400" />
</div>

8. Width/Height percentage Animation
<div>
    <img  src="https://static.wixstatic.com/media/e71421_01bf2bb00f52487588f45a242369eb94~mv2.gif"  alt= “Width/Height percentage interpolation gif”  width="200"  height="400" />
</div>
