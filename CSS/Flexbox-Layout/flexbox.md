**Flex container** - The element on which we use Flexbox.

**Flex items** - All the direct children of the Flex container.

**Main axis** - The direction on which these Flex items are laid out.

**Cross axis** - The other perpendicular axis. 

We can change the direction of the main axis, and also there are different ways of aligning elements both along the main axis and the cross axis.

**Flex-direction** - Specifies in which direction the main axis goes. the direction can go as a row, which is the default direction.

**flex-wrap** - Defines if the Flex items should wrap into a new line if there is not enough space in the Flex container or not.

**justify-content** - Defines how the Flex items will be aligned along the main axis.

**Align-items** - Defines how the Flex items will be aligned along the cross axis, not the main axis.

**Align-content** - Only applies when there is more than one row of Flex items. In that case, align-content controls how the rows are aligned along the cross axis if there is some empty space.

---

Properties for Flex items 

**Align-self** - Similar to align-items but for one individual Flex item. for example, that we set align items to center, but then we want one of the items to be aligned to the bottom. And so we can use align-self for that.

**Order** - Defines the order in which one specific Flex item should appear inside the container. 

Three properties that together, basically helps Flexbox decide on the width of a Flex item.

**Flex-grow** - Define how much an item can grow or Determines whether the elements are allowed to grow as large as they can or not.

**Flex-shrink** - Defines how much it can shrink or Determines whether flexbox is allowed to shrink elements, if necessary or not.

**Flex-basis** - Define its base width.

And there's actually a shortened property of these, which is simply called flex.
