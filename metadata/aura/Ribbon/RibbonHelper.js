({
     getStyle : function(color) {
    
            var style =""
        if (color==="White") {
            style="slds-theme--default"
        } else if (color==="Grey") {
            style="slds-theme--shade"
        } else if (color==="Dark Blue") {
            style="slds-theme--inverse"
        } else if (color==="Blue") {
            style="slds-theme--alt-inverse"
        } else if (color==="Light Blue") {
            style="slds-theme--info"
        } else if (color==="Green") {
            style="slds-theme--success"
        } else if (color==="Yellow") {
            style="slds-theme--warning"
        } else if (color==="Red") {
            style="slds-theme--error"
        } else if (color==="Salesforce Blue") {
            style="slds-theme--info sf-blue"
        } else if (color==="Dark") {
            style="slds-theme--offline"
        }
		return style
    
},
	setColors : function(component) {
		var color1 = component.get("v.color1")
        var color2 = component.get("v.color2")
        var color3 = component.get("v.color3")
        var color4 = component.get("v.color4")
        var striped1 = component.get("v.striped1")
        var striped2 = component.get("v.striped1")
        var striped3 = component.get("v.striped1")
        var striped4 = component.get("v.striped1")
        
		var style1 = this.getStyle(color1)
        var style2 = this.getStyle(color2)
        var style3 = this.getStyle(color3)
        var style4 = this.getStyle(color4)

        if (component) {
        	var section1 = component.find("section1");
            var section2 = component.find("section2");
            var section3 = component.find("section3");
            var section4 = component.find("section4");
            
        	$A.util.addClass(section1,style1);
            $A.util.addClass(section2,style2);
            $A.util.addClass(section3,style3);
            $A.util.addClass(section4,style4);
            if (striped1) {
                $A.util.addClass(section1,"slds-theme--alert-texture");
            }
            if (striped2) {
                $A.util.addClass(section2,"slds-theme--alert-texture");
            }
            if (striped3) {
                $A.util.addClass(section3,"slds-theme--alert-texture");
            }
            if (striped4) {
                $A.util.addClass(section4,"slds-theme--alert-texture");
            }
            
        	console.log("Estilo:" + style1)
        	console.log("Seccion: "+section1)
        }        
	}
    
   
})