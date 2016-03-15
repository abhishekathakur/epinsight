var dashboard4= (function () {

    "use strict";

    // Currently selected dashboard values
   
  var query2 ="";
   var sin = [],sin2 = [],
      cos = [];

   var month=new Array(12);
month[1]="January";
month[2]="February";
month[3]="March";
month[4]="April";
month[5]="May";
month[6]="June";
month[7]="July";
month[8]="August";
month[9]="September";
month[10]="October";
month[11]="November";
month[12]="December";
    /* Render the dashboard */

    function render() {

        var html =
            '<div id="chart1" class="chart chart2"></div>' +
               
				
                '<svg id=test1 ></svg>' 
                
					;
				

        $("#content").html(html);

	

		 var query ={

query: {
	bool: {
		must: [{ match: { Year_Name:  '2015-16' }},
		          {match: { Month_name:  'December' }}
		    ]
			}
			},
'size':0,

aggs: {
    1: {
      sum: {
        field: 'Revenue'
      }
    },


		2: {
      sum: {
        field: 'Revenue_Plan'
      }
    },
    3: {
      sum: {
        field: 'Sales_quantity'
      }
    },
    4: {
      sum: {
        field: 'Sales_Plan'
      }
    },
    5: {
      max: {
        field: 'MonthYr'
      }
    }
  }







}



 


var query1 ={

query: {
	bool: {
		must: [{ match: { Year_Name:  '2015-16' }}
			 
		 ]
			}
			},
'size':0,

aggs: {
    1: {
      sum: {
        field: 'Revenue'
      }
    },


		2: {
      sum: {
        field: 'Revenue_Plan'
      }
    },
    3: {
      sum: {
        field: 'Sales_quantity'
      }
    },
    4: {
      sum: {
        field: 'Sales_Plan'
      }
    }
    
  }


}



 query2 ={

query: {
	
	bool: {
		must: [{ match: { Year_Name:  '2015-16' }}
			 
		 ]
			}
			
},
'size':0,

aggs: {
    Month: {
      terms: {
        field: 'Customer_Grp',
        size: 12,
        order: {
          _term: 'asc'
        }
      }
	,

aggs: {
    1: {
      sum: {
        field: 'Revenue'
      }
    },

	2: {
      sum: {
        field: 'Revenue_Plan'
      }
    },
    3: {
      sum: {
        field: 'Sales_quantity'
      }
    },
    4: {
      sum: {
        field: 'Sales_Plan'
      }
    }
    
  }
	

}


}}

                

              $.ajax({
                url: 'http://192.168.10.142:9200/.salesdata/_search',
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json',
                crossDomain: true,
                data: JSON.stringify(query),
				 //data: {"search": search_term},
               success: function(json) {
				  
                 // alert(""+JSON.parse(data.hits.hits.count));
                 // $("#results").empty();
                 // $("#results").append("<p>Results for <b>" + $("#searchterm").val() + "</b></p>");
				  //alert(json.aggregations[1].value);

				   $('#chart1>.graph').html("<table class='table'><tr><td></td><td>Actual</td><td>Planned</td></tr>"+
					   "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(2)+"</td><td>"+json.aggregations[2].value.toFixed(2)+"</td></tr>"+
					   "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(2)+"</td><td>"+json.aggregations[4].value.toFixed(2)+"</td></tr>"+
					   "</table>" );

				  
                  
                }
              });



	



              $.ajax({
                url: 'http://192.168.10.142:9200/.salesdata/_search',
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json',
                crossDomain: true,
                data: JSON.stringify(query1),
				 //data: {"search": search_term},
               success: function(json) {
				  
                 // alert(""+JSON.parse(data.hits.hits.count));
                 // $("#results").empty();
                 // $("#results").append("<p>Results for <b>" + $("#searchterm").val() + "</b></p>");
				  //alert(json.aggregations[1].value);

				   $('#chart2>.graph').html("<table class='table'><tr><td></td><td>Actual</td><td>Planned</td></tr>"+
					   "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(2)+"</td><td>"+json.aggregations[2].value.toFixed(2)+"</td></tr>"+
					   "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(2)+"</td><td>"+json.aggregations[4].value.toFixed(2)+"</td></tr>"+
					   "</table>" );

				  
                  
                }
              });


			   
function someCallBack()
	{
  //Data is represented as an array of {x,y} pairs.
 // for (var i = 0; i < 100; i++) {
 //   sin.push({x: i, y: Math.sin(i/10)});
  //  sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
    //cos.push({x: i, y: .5 * Math.cos(i/10)});
 // }

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: sin,      //values - represents the array of {x,y} data points
      key: 'Planned', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    }
   // {
   //   values: sin2,
   //   key: 'Actual',
   //   color: '#2ca02c'
   // }
	//,
    //{
     // values: sin2,
     // key: 'Another sine wave',
      //color: '#7777ff',
      //area: true      //area - set to true if you want this line to turn into a filled area chart.
    //}
  ];
}









function sinAndCos() {


	  var testdata = [
        {x: "One", y: 5},
        {x: "Two", y: 2},
        {x: "Three", y: 9},
        {x: "Four", y: 7},
        {x: "Five", y: 4},
        {x: "Six", y: 3},
        {x: "Seven", y: 0.5}
    ];
var mydata=someCallBack();
    var height = 350;
    var width = 350;

 var chart1;
  nv.addGraph(function() {
        var chart1 =nv.models.discreteBarChart()
      .x(function(d) { return d.label })    //Specify the data accessors.
      .y(function(d) { return d.value })
      .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
      //.tooltips(false)        //Don't show tooltips
      .showValues(true)       //...instead, show the bar value right on top of each bar.
      //.transitionDuration(350)
      ;

 d3.select("#test1")
        .datum(mydata)
       .transition().duration(350)
        .call(chart1);
 

  nv.utils.windowResize(chart1.update);
   

        return chart1;

    });

   



	}

	













          
$.ajax({
                url: 'http://192.168.10.142:9200/.salesdata/_search',
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json',
                crossDomain: true,
                data: JSON.stringify(query2),
				 //data: {"search": search_term},
               success: function(json) {
				  
                 // alert(""+JSON.parse(data.hits.hits.count));
                 // $("#results").empty();
                 // $("#results").append("<p>Results for <b>" + $("#searchterm").val() + "</b></p>");
                 // alert(json.aggregations.Month.buckets.length);
				  for(var i=0;i<json.aggregations.Month.buckets.length;i++)
				   {
						
						//sin.push({x: i, y: 100});
						//sin2.push({x: i, y: 110});
						 alert(json.aggregations.Month.buckets[i].key);
						sin.push({label:json.aggregations.Month.buckets[i].key,value: json.aggregations.Month.buckets[i][1].value.toFixed(2)});
                        //sin2.push({x: i, y: json.aggregations.Month.buckets[i][2].value.toFixed(2),label:month[parseInt(json.aggregations.Month.buckets[i].key_as_string.substring(5, 7))]});
						//json.aggregations.Month.buckets[i][1].key
				   }
				 // alert(json.aggregations.Month.buckets[0].key);
				  //alert(json.aggregations.Month.buckets[0][1].value);

				   //$('#chart2>.graph').html("<table class='table'><tr><td></td><td>Actual</td><td>Planned</td></tr>"+
					//   "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(2)+"</td><td>"+json.aggregations[2].value.toFixed(2)+"</td></tr>"+
					//   "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(2)+"</td><td>"+json.aggregations[4].value.toFixed(2)+"</td></tr>"+
					 //  "</table>" );

				  //someCallBack();
				 sinAndCos();
                  
                }
              });




	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}



    return {
        render: render
    }

}());