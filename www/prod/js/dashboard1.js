var query2 = "";
var btype="Tubing";

var sin = [], sin2 = [], cos = [], pie = [],cat=[],cat_lcy=[],sin2_lcy = [], cos_lcy = [];


var piechartData = "";

var subamt=0;subqnt=0,subamt_lcy=0,subqnt_lcy=0;
var totsubamt=0;totsubqnt=0,totsubamt_lcy=0,totsubqnt_lcy=0;
//Param=0,qstring="AMESA";

var query_Dash2 = "", query_region_Dash2 = "",query_country_Dash2= "",query_kam_Dash2= "",
	
	 query1_Dash2 = "" ,query1_region_Dash2 = "",query1_country_Dash2= "",query1_kam_Dash2= "",
	 query2_Dash2 = "" ,query2_region_Dash2 = "",query2_country_Dash2= "",query2_kam_Dash2= "", 
	 query3_Dash2 = "" ,query3_region_Dash2 = "",query3_country_Dash2= "",query3_kam_Dash2="";

var month = new Array(12);
month[1] = "Jan";
month[2] = "Feb";
month[3] = "Mar";
month[4] = "Apr";
month[5] = "May";
month[6] = "Jun";
month[7] = "Jul";
month[8] = "Aug";
month[9] = "Sep";
month[10] = "Oct";
month[11] = "Nov";
month[12] = "Dec";

function DisableCur2()
{ 
  document.getElementById("q156").checked=false;
  document.getElementById("q157").checked=true;
}
function changeCurDisplay2(pcur)
{  
   document.getElementById("cur").innerHTML=pcur;
	if(pcur=="USD")
		{
		 $('#invtable').html(mtd_usd);
		
		  BudgetBarChart();
		}
	else
		{
		$('#invtable').html(mtd_lcy);
		
		BudgetBarChart();
		}
	
}

var dashboard1 = (function() {

	//"use strict";
	
	
	
		
		
		
		
		
		function render() {
			
			var html ="";
			
			 mtd_lcy="";ytd_lcy=""; 
			 mtd_usd="";ytd_usd="";
			 dtd_usd="";dtd_lcy="";
			 ctd_usd="";ctd_lcy="";

			 html = '<fieldset><div id="headerDivImg">' 
				 +'<div id="titleTextImg"><span id="loc"></span> | <span>'+actyr+'</span> | <span id="cur"></span></div>' +'<a id="imageDivLink" href="javascript:toggle5()"><img src="../img/plus.png"></a>'
					+'</div>'
					+ '<div id="contentDivImg" style="display: none;"> ';
					if(param<=1)
						{
							html=html+ '<div class="row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Region :&nbsp;'
							+ '<div class="col-sm-9">'
							+ '<div class="btn-group" data-toggle="buttons">';
							if(param==0)
								{cur="USD";
								html=html+ '<label >'
								+ '    <input type="radio" id="q151" name="quality25" value="All" onChange=Changeit2("0","All") /> All'
								+ '</label> ';
								}
							
							var myString = region;

							var mySplitResult = myString.split("%");

							for(i = 0; i < mySplitResult.length; i++){
								html=html+ ' <label >'
								+ '    <input type="radio" id="q152" name="quality25" value='+mySplitResult[i] +' onChange=Changeit2("1","'+mySplitResult[i]+'") /> '+ mySplitResult[i]
								+ '</label> '
								
							    //document.write("<br /> Element " + i + " = " + mySplitResult[i]); 
							}
							if(param==1)
							{
								qstring=mySplitResult[0];
								cur="USD";
							}
							
							
		
							//html=html+' </div></div></div>'
						}
					if(param<=2)
					{
							//html=html+ '<div class="row">Country'
						//+ '<div class="col-sm-9">'
						//+ '<div class="btn-group" data-toggle="buttons">';
						html=html+ '<br>'
							var myString = country;

							var mySplitResult = myString.split("%");

							for(i = 0; i < mySplitResult.length; i++){
								html=html+ ' <label >'
								+ '    <input type="radio" id="q153" name="quality25" value='+mySplitResult[i] +' onChange=Changeit2("2","'+mySplitResult[i]+'") /> '+ mySplitResult[i]
								+ '</label> '
								
							    //document.write("<br /> Element " + i + " = " + mySplitResult[i]); 
							}
							if(param==2)
								qstring=mySplitResult[0];
							
						
	
							html=html+' </div></div></div>'
					}

					html=html+ '<div class="row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BType :&nbsp;'
							+ '<div class="col-sm-9">'
							+ '<div class="btn-group" data-toggle="buttons">'
					
                   + ' <label ><select id="btypeid" onChange=ChangeBType()>'
				               + '<option>Tubing</option>'
							   + '<option>Lami-Printing</option>'
							    + '<option>Laminator</option>'
								+ '</select></label> '
					html=html+'</div></div></div></div>' +
					
					

					'<div class="container">' + 

					'<div class="row">' + '<div class="col-xs-12">'
					
					+ '<div id="invtable"></div>' + '</div></div>'
					
                    + '<div class="title"><table ><caption>Workcenter Exception Details </caption></table></div>'
					
					+ '<div style="width:100%;height:350" >' + '<div>'
					+ '<canvas id="canvas" height="350" width="600"></canvas>'
					+ '</div>' + '<div id="legendDiv" class="chart-legend"></div>' + '</div>'  
					
				 
					

					'</div>';


			$("#content").html(html);
			
			
			SelectMTSQuery_Dash4(qstring);
			MTDList_Dash4(param);
			
			
		}


	


	
	
	return {
		render : render
		
	}

}());






/*Function Calling Start*/


/*Function Calling End*/

// Currently selected dashboard values
/*	
 *function QueryModify() {

query = "{" + "query: {" + "bool: {"
			+ "must: [{match: { Month_name:  amonth[mon] }}" +

			"]}}," + "'size':0," +

			"aggs: {" + "Month: {" + "  terms: {" + "field: 'Year_Name',"
			+ "size: 2," + "order: {" + "  _term: 'asc'" + "}" + "}" + ","
			+ "aggs: {" + "	1: {" + "	  sum: {" + "	field: 'Revenue'"
			+ "  }" + "}," +

			"	2: {" + "  sum: {" + "	field: 'Revenue_Plan' " + " }" + "},"
			+ "3: {" + " sum: {" + "	field: 'Sales_quantity'" + " }" + "},"
			+ "4: {" + "  sum: {" + "	field: 'Sales_Plan'" + "  }" + "},"
			+ "5: {" + "  max: {" + "	field: 'MonthYr'" + "  }" + "}" + "}"
			+

			"}" +

			"}}";

}
*/
/* MTD Query List Start */
function SelectMTSQuery_Dash4(qstring)
{
	 document.getElementById("loc").innerHTML=qstring;
	 btype=document.getElementById("btypeid").value;
	 document.getElementById("cur").innerHTML=btype;//alert(qstring);
	

	  query_Dash1 ={ 
		    query: { bool: { must: [ {match: { BType: btype }}
                                           
	 ]}
  },
			  
			  'size':0,

   
   
    aggs: {
    Workcenter: {
      terms: {
        field: 'Workcenter',
        size: 40,
        order: {
          1: 'desc'
        }
      },
      aggs: {
        1: {
          sum: {
            field: 'Deviation'
          }
        },
        4: {
          terms: {
            field: 'BType',
            size: 40
          },
          aggs: {
            1: {
              sum: {
                field: 'Deviation'
              }
            },
            5: {
              terms: {
                field: 'UOM',
                size: 40
                
              },
              aggs: {
                1: {
                  sum: {
                    field: 'Deviation'
                  }
                },
                6: {
                  terms: {
                    field: 'Plantname',
                    size: 40,
     order: {
                      _term: 'asc'
                    }
                  },
          aggs: {
            1: {
              sum: {
                field: 'Planned'
              }
            },
            2: {
              sum: {
                field: 'Production'
              }
            },
            3: {
              sum: {
                field: 'Deviation'
              }
            },
            4: {
              sum: {
                field: 'Deviation_3Day'
   }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}  
	 



  query_region_Dash1 =
  
  
  { 
		  
		  query: { bool: { must: [ {match: { Region: qstring }},
				 {match: { BType: btype }}
                                           
	 ]}
  }, 'size':0,
	  
   aggs: {
    Workcenter: {
      terms: {
        field: 'Workcenter',
        size: 40,
        order: {
          1: 'desc'
        }
      },
      aggs: {
        1: {
          sum: {
            field: 'Deviation'
          }
        },
        4: {
          terms: {
            field: 'BType',
            size: 40
          },
          aggs: {
            1: {
              sum: {
                field: 'Deviation'
              }
            },
            5: {
              terms: {
                field: 'UOM',
                size: 40
                
              },
              aggs: {
                1: {
                  sum: {
                    field: 'Deviation'
                  }
                },
                6: {
                  terms: {
                    field: 'Plantname',
                    size: 40,
     order: {
                      _term: 'asc'
                    }
                  },
          aggs: {
            1: {
              sum: {
                field: 'Planned'
              }
            },
            2: {
              sum: {
                field: 'Production'
              }
            },
            3: {
              sum: {
                field: 'Deviation'
              }
            },
            4: {
              sum: {
                field: 'Deviation_3Day'
   }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
  
  query_country_Dash1 ={ query: { bool: { must: [{match: { Country: qstring}},
	                                  {match: { BType: btype }}
                                           
	 ]}}, 'size':0,
	  
	 aggs: {
    Workcenter: {
      terms: {
        field: 'Workcenter',
        size: 40,
        order: {
          1: 'desc'
        }
      },
      aggs: {
        1: {
          sum: {
            field: 'Deviation'
          }
        },
        4: {
          terms: {
            field: 'BType',
            size: 40
          },
          aggs: {
            1: {
              sum: {
                field: 'Deviation'
              }
            },
            5: {
              terms: {
                field: 'UOM',
                size: 40
                
              },
              aggs: {
                1: {
                  sum: {
                    field: 'Deviation'
                  }
                },
                6: {
                  terms: {
                    field: 'Plantname',
                    size: 40,
     order: {
                      _term: 'asc'
                    }
                  },
          aggs: {
            1: {
              sum: {
                field: 'Planned'
              }
            },
            2: {
              sum: {
                field: 'Production'
              }
            },
            3: {
              sum: {
                field: 'Deviation'
              }
            },
            4: {
              sum: {
                field: 'Deviation_3Day'
   }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


}
 
//	(qstring);




/* Render the dashboard */


	function MTDList_Dash4(Param)
	{     
	 ///alert("Param"+Param);
	var mtd_query="";

	 mtd_lcy="";
	 mtd_usd="";
		if(Param==1)
			mtd_query=query_region_Dash1;
		else if(Param==2)
			mtd_query=query_country_Dash1;
	
		else
			mtd_query=query_Dash1;
		
	$.ajax({
				url : 'http://192.168.10.142:9200/.prodexcepdata/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(mtd_query),
				// data: {"search": search_term},+ '<div class="title"></div>'
				success : function(json) {
					
					 var innerTable ="<table ><caption>Workcenter Exception Details </caption><thead><tr><th>WrkCenter</th><th>Plan.</th><th> Prod.</th><th>Deviation</th><th>Deviation_Last 3 Day</th><th>Plant</th><th>BType</th><th>UOM</th></tr><tbody class='searchable'>" ;
							//"<th>Apr</th><th>May</th><th>Jun</th><th>Jul</th><th>Aug</th><th>Sep</th>" +
							//"<th>Oct</th><th>Nov</th><th>Dec</th><th>Jan</th><th>Feb</th><th>Mar</th></tr></thead><tbody>";
					       // "<th>Feb</th><th></th><th>Jan</th></tr></thead><tbody>";
					
					
					//var qnt = "<tr><td>Quantity:</td><td>";
					//var innerTable="";
					//var innerTable_lcy="";
					 sin = []; sin2 = []; cos = [];
				
					// alert(""+JSON.parse(data.hits.hits.count));
					// $("#results").empty();
					// $("#results").append("<p>Results for <b>" +
					// $("#searchterm").val() + "</b></p>");
					// alert(json.aggregations[1].value);
					/*
					 * $('#graph1').html("<table ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
					 * 
					 */
                  
                    
					for ( var i = 0; i < json.aggregations.Workcenter.buckets.length; i++) 
					{  
						var pkey=json.aggregations.Workcenter.buckets[i].key;
							
						 sin.push(pkey);
							
							
                           // for ( var j = 0; j < json.aggregations.Workcenter.buckets[i][4].buckets[0].Month.buckets.length; j++) 
                            	//{
                            		var cls="even";
                            		if(i%2==0)
                            			cls="odd";
                            		
                            		
                            	
                            		
                            		
                            		
                            	
                            		
                            			
                            				
                            				innerTable=innerTable+"<tr class="+cls+"><td align=left>"
        								    + json.aggregations.Workcenter.buckets[i].key
        								    + "</td><td align=right>"
        									
        								    + json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][1].value.toFixed(4)
        									+ "</td><td align=right>"

											+ json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][2].value.toFixed(4)
        									+ "</td><td align=right>"

											+ json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][3].value.toFixed(2)
        									+ "</td><td align=right>"

											+ json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][4].value.toFixed(2)
        									+ "</td><td align=left>"
											+ json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0].key
        									+ "</td><td align=left>"
											+ json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0].key
        									+ "</td><td align=left>"
											+ json.aggregations.Workcenter.buckets[i][4].buckets[0].key
        									+ "</td></tr>";

        									//json.aggregations.Workcenter.buckets[i][4].buckets[0].key
											//json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0].key
        									
                            			
                            			sin2.push(json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][3].value.toFixed(2));
                        			     cos.push(json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][4].value.toFixed(2));
                            		
									
									
										
										
                            		
                            			
                            	
                            			
									
                            		 
                            			
                            			
                            			/* Chart Data */
                            			
                            			
        						        
                            	
						

					}
					
					
					
			
                 innerTable=innerTable+"</tbody></table>"

				
				
				
                 
				
				
					$('#invtable').html(innerTable);
				
					
                   BudgetBarChart() 

				}
			});
	}
	
	
	function BudgetBarChart() {
		collectdata();
		var ctx = document.getElementById("canvas").getContext("2d");
		var myLine = new Chart(ctx).Bar(piechartdata, {
			responsive : true
		});

		document.getElementById("legendDiv").innerHTML = myLine
				.generateLegend();
	}
	
	
function collectdata() 
{
		var dta=cos;
		var dts_pln=sin2;
     
    	  
    	
      
      piechartdata = {
			labels : sin,
			datasets : [ {
				label : "Deviation",
				fillColor : "rgba(140,55,155,1)",
				strokeColor : "rgba(140,55,155,1)",
				pointColor : "rgba(140,55,155,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : dts_pln
			}, {
				label : "Deviation-3Day",
				fillColor : "rgba(151,167,205,1)",
				strokeColor : "rgba(151,167,205,1)",
				pointColor : "rgba(151,167,205,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(151,187,205,1)",
				data : dta
			} ]

		}

	}

