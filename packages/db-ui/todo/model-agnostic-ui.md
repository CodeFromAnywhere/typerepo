# Model agnostic ui

So far I've made a MySQL PHPMyAdmin replica and I've added some cool features for assets and select boxes, but this new thing will really shine if I add UI generation that is model-agnostic.

There are many ways to present data. It's often a lot of custom work to make a good user experience for the end-user. Frontend development takes up more than half of all development time.

What if I had a smart ui component that would work for any model you put inside? I have the table but I need:

- list-view that shows the most important data, as much as would fit
- grid-view (list on mobile) that shows the most important info of the model, plus some fields that you select
- detail-view that shows the most important info on top, plus all other information in specifications

To make it even better, we also need:

- sort (only on relevant, sortable things)
- filters (only relevant, easy to filter things)
- using calculated values

# Field semantics

Based on the name of the field, you can already know a lot of information about how the model should be represented. It doesn't matter in what shape exaclty you want to show the model, the semantics stay the same. If I make a good semantic, and provide optional overwriting of this setting, a lot can be generated.

Some examples:

- name is often very prominent
- description is very prominent as well
- xxxyImage is often also very imporant, and is represented visually, not as URL or object

# Using custom UI

Sometimes you may want to show a custom UI like a graph or something or a small ICON that you want to add instead of the title. These little things can improve the UI drastically, but are often very custom.

Emojis are great though because they can be inputed in the doc-comments. These can already be used as icons. Besides that we can get a small icon library that is supported over all of king os. These can have a slug and these can also be selected if you don't want an emoji.

The exact composition is not that important. More important is that the UI actually looks good.

# Sort, filter

Based on the name of the field, it can be guessed if you should be able to sort/filter on it or not. You can also overwrite it by doing something like `FILTER: true` in your doc-comment of the parameter

# Using calculated values

Calculated values are sometimes very complex to calculate and very custom. But what if we can still show them? That would be great. We can make a function convention that finds functions with the name `calculate[ModelName][CalculationDescription]` which can calculate one or multiple fields on the item (takes the raw item until then, returns the augmented item item). Sometimes it may require previous calculations in order to do more. You can then supply the order in frontmatter. Sometimes it requires additional data, and sometimes its way more efficient to provide it instead of fetching that for every item individually. You can then also supply the function `calculate[ModelName][CalculationDescription]PreloadData` function, which will be executed before, and which will be supplied to every item besides the raw item.

If I implement this convention, it will be possible to show ALL data for passionfruit, instead of just the stored data.
