({
    doDoneRendering : function(component, event, helper) {
        console.log("1Componente: "+component)
        helper.setColors(component)
       
        console.log("HOLA")
    },
    
	doInit : function(component, event, helper) {
        
      
        var getTipos = component.get("c.getTipos");
        var Tparam = {
             "sObjectName" : component.get("v.sObjectName"),
            "field1" : component.get("v.field1"),
            "field2" : component.get("v.field2"),
            "field3" : component.get("v.field3"),
            "field4" : component.get("v.field4"),
            "field5" : component.get("v.field5"),
            "field6" : component.get("v.field6"),
            "field7" : component.get("v.field7")
        };
        getTipos.setParams(Tparam);
        getTipos.setCallback(this, function(a){
            var res=[];
            res = a.getReturnValue()
            if (component.get("v.field1")) {
	            component.set("v.field1_type", res[0])
            }
	        if (component.get("v.field2")) {
            component.set("v.field2_type", res[1])
            }
            if (component.get("v.field3")) {
                component.set("v.field3_type", res[2])
            }
            if (component.get("v.field4")) {
                component.set("v.field4_type", res[3])
            }
            if (component.get("v.field5")) {
                component.set("v.field5_type", res[4])
            }
            if (component.get("v.field6")) {
                component.set("v.field6_type", res[5])
            }
            if (component.get("v.field7")) {
                component.set("v.field7_type", res[6])
            }
           
        });
            
        $A.enqueueAction(getTipos);    
		var getValores = component.get("c.getValores");
        
        var params = {
            "recordId" : component.get("v.recordId"),
            "sObjectName" : component.get("v.sObjectName"),
            "field1" : component.get("v.field1"),
            "field2" : component.get("v.field2"),
            "field3" : component.get("v.field3"),
            "field4" : component.get("v.field4"),
            "field5" : component.get("v.field5"),
            "field6" : component.get("v.field6"),
            "field7" : component.get("v.field7")
          
        };
        getValores.setParams(params);
        getValores.setCallback(this, function(a){
            var res=[];
            var i = 0;
            res = a.getReturnValue()
            if (component.get("v.field1")) {
                if (component.get("v.field1_type")=="Decimal") {
	            component.set("v.field1_data", res[i])
                } else if (component.get("v.field1_type")=="Currency") {
	            component.set("v.field1_data", res[i])
                } else if (component.get("v.field1_type")=="Date") {
	            component.set("v.field1_data_dt", res[i])
                } else if (component.get("v.field1_type")=="String") {
	            component.set("v.field1_data_st", res[i])
                } 
                i=i+1;
            }
	        if (component.get("v.field2")) {
                 if (component.get("v.field2_type")=="Decimal") {
	            component.set("v.field2_data", res[i])
                } else if (component.get("v.field2_type")=="Currency") {
	            component.set("v.field2_data", res[i])
                } else if (component.get("v.field2_type")=="Date") {
	            component.set("v.field2_data_dt", res[i])
                } else if (component.get("v.field2_type")=="String") {
	            component.set("v.field2_data_st", res[i])
                } 
                i=i+1;
            }
            if (component.get("v.field3")) {
                if (component.get("v.field3_type")=="Decimal") {
	            component.set("v.field3_data", res[i])
                } else if (component.get("v.field3_type")=="Currency") {
	            component.set("v.field3_data", res[i])
                } else if (component.get("v.field3_type")=="Date") {
	            component.set("v.field3_data_dt", res[i])
                } else if (component.get("v.field3_type")=="String") {
	            component.set("v.field3_data_st", res[i])
                } 
                i=i+1;
            }
            if (component.get("v.field4")) {
               if (component.get("v.field4_type")=="Decimal") {
	            component.set("v.field4_data", res[i])
                } else if (component.get("v.field4_type")=="Currency") {
	            component.set("v.field4_data", res[i])
                } else if (component.get("v.field4_type")=="Date") {
	            component.set("v.field4_data_dt", res[i])
                } else if (component.get("v.field4_type")=="String") {
	            component.set("v.field4_data_st", res[i])
                } 
                i=i+1;
            }
            if (component.get("v.field5")) {
                if (component.get("v.field5_type")=="Decimal") {
	            component.set("v.field5_data", res[i])
                } else if (component.get("v.field5_type")=="Currency") {
	            component.set("v.field5_data", res[i])
                } else if (component.get("v.field5_type")=="Date") {
	            component.set("v.field5_data_dt", res[i])
                } else if (component.get("v.field5_type")=="String") {
	            component.set("v.field5_data_st", res[i])
                } 
                i=i+1;
            }
            if (component.get("v.field6")) {
                if (component.get("v.field6_type")=="Decimal") {
	            component.set("v.field6_data", res[i])
                } else if (component.get("v.field6_type")=="Currency") {
	            component.set("v.field6_data", res[i])
                } else if (component.get("v.field6_type")=="Date") {
	            component.set("v.field6_data_dt", res[i])
                } else if (component.get("v.field6_type")=="String") {
	            component.set("v.field6_data_st", res[i])
                } 
                i=i+1;
            }
            if (component.get("v.field7")) {
                if (component.get("v.field7_type")=="Decimal") {
	            component.set("v.field7_data", res[i])
                } else if (component.get("v.field7_type")=="Currency") {
	            component.set("v.field7_data", res[i])
                } else if (component.get("v.field7_type")=="Date") {
	            component.set("v.field7_data_dt", res[i])
                } else if (component.get("v.field7_type")=="String") {
	            component.set("v.field7_data_st", res[i])
                } 
                i=i+1;
            }
           
        });
        $A.enqueueAction(getValores);
	}
})