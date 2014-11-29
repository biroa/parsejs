Parse.initialize("Vvo09wD8Uym5wsnzVeRHEcT9Wx4IotjfzE4j5szp", "5hJe3kvTfD3Poj2upWSJ9FqQIiuAjiAGYj5JlF8s");

var Blog = Parse.Object.extend("Blog");
var Blogs = Parse.Collection.extend({
    model: Blog
});

var BlogsView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){ 
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
});


var blogs = new Blogs();
blogs.fetch({
	success: function(blogs) {
		var blogsView = new BlogsView({ collection: blogs });
    	blogsView.render();
    	$('.main-container').html(blogsView.el);
	},
    error: function(blogs, error) {
        console.log(error);
    }
});
