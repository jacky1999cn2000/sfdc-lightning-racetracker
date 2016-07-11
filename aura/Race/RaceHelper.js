({
	updateRace: function(component){
		var race = component.get('v.race');
		var action = component.get('c.updateRaceDB');
		action.setParams({'race':race});
		action.setCallback(this, function(response){
			var state = response.getState();
			if(component.isValid() && state === 'SUCCESS'){
				console.log('Race successfully updated');
				//fire toaster to indicate udpate
				var toastEvent = $A.get("e.force:showToast");
		    toastEvent.setParams({
		        "title": "Success!",
		        "message": "The record has been updated successfully."
		    });
		    toastEvent.fire();
			}else if(state === 'ERROR'){
				var errors = response.getError();
				if(errors){
					if(errors[0] && errors[0].message){
						console.log('Error message: ', errors[0].message);
					}
				}else{
					console.log('Unknown error');
				}
			}else{
				console.log('Action State returned was: ', state);
			}
		});
		$A.enqueueAction(action);
	}
})
