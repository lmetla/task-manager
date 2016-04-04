import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTask: function(){
			var title = this.get('title');
			var description = this.get('description');
			var date = this.get('date');

			// save the task
			var newTask = this.store.createRecord('task',{
				title: title,
				description: description,
				date: new Date(date)
			});
			newTask.save();

			//Clear the properities
            this.setProperties({
            	title:'',
            	description: '',
            	date: ''
            })

		}
	}
});
