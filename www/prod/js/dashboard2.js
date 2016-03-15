


var query2 = "";

var sin = [], sin2 = [], cos = [], pie = [],cat=[],cat_lcy=[],sin2_lcy = [], cos_lcy = [];

var lineChartData = "";
var figl1 = "",figl2 = "",figl3 = "",figl4 = "",figl5 = "",figl6 = "",figl7 = "",figl8 = "",figl9 = "",figl10 = "";
//Param=0,qstring="AMESA";

var query = "", query_region = "",query_country= "",query_kam= "",
	
	 query1 = "" ,query1_region = "",query1_country= "",query1_kam= "",
	 query2 = "" ,query2_region = "",query2_country= "",query2_kam= "", 
	 query3 = "" ,query2_region = "",query2_country= "",query2_kam= "";
function DisableCur()
{ 
  document.getElementById("q156").checked=false;
  document.getElementById("q157").checked=true;
}

var dashboard2 = (function() {

	//"use strict";
	
	
	
		
		
		
		
		
		function render() {
			
			var html ="";

			
			
			
			
			 html = '<fieldset><div id="headerDivImg">' 
				 +'<div id="titleTextImg"><span id="loc"></span> | <span>'+datedim+'</span> | <span id="cur"></span> | <span>(Value in 000)</span></div>' +'<a id="imageDivLink" href="javascript:toggle5()"><img src="../img/plus.png"></a>'
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
								+ '    <input type="radio" id="q151" name="quality25" value="All" onChange=Changeit("0","All") /> All'
								+ '</label> ';
								}
							
							var myString = region;

							var mySplitResult = myString.split("%");

							for(i = 0; i < mySplitResult.length; i++){
								html=html+ ' <label >'
								+ '    <input type="radio" id="q152" name="quality25" value='+mySplitResult[i] +' onChange=Changeit("1","'+mySplitResult[i]+'") /> '+ mySplitResult[i]
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
								+ '    <input type="radio" id="q153" name="quality25" value='+mySplitResult[i] +' onChange=Changeit("2","'+mySplitResult[i]+'") /> '+ mySplitResult[i]
								+ '</label> '
								
							    //document.write("<br /> Element " + i + " = " + mySplitResult[i]); 
							}
							if(param==2)
								qstring=mySplitResult[0];
							
						
	
							html=html+' </div></div></div>'
					}
					else
						{
						 qstring=kam.replace("%20"," ");
						 ///alert(qstring);
						}
					

					html=html+'<div class="row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currency :&nbsp;'
					+ '<div class="col-sm-9">'
					+ '<div class="btn-group" data-toggle="buttons">'
					+ ' <label ">'
					+ '    <input type="radio" id="q156" name="quality26" value="LCY" onChange=ChangeCur("LCY") /> LCY'
					+ '</label> '
					+ ' <label >'
					+ '    <input type="radio" id="q157" name="quality26" value="USD" onChange=ChangeCur("USD") /> USD'
					+ ' </label> ' +

					' </div></div></div>' +

					'</div></fieldset>'
					+'<div class="container">' 
					+ '<div class="row">'
					+ '<div class="col-xs-12">'
				
					+ '<div id="graph1"></div>' 
					+ '</div></div>' 
				    + '<div class="row">' + '<div class="col-xs-12">'
					
					+ '<div id="graph2"></div>' 
					+ '</div></div>'  

				     + '<div class="row">' + '<div class="col-xs-12">'
					
					+ '<div id="graphTable"></div>' 
					+ '</div></div>' 
				
					

					+'</div>';

			$("#content").html(html);
			
			
			SelectMTSQuery(qstring);
			
			SelectYTDQuery(qstring);
			YTDList(param);
			SelectMTRQuery(qstring);
			MonthlyTrends(param);
			SelectYTRQuery(qstring);
            YearlyTrends(param);
			//SelectCatQuery(qstring);
			//CategoryContribution(param);
			
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
			+ "must: [{match: { Month_name:  mon}}" +

			"]}}," + "'size':0," +

			"aggs: {" + "Month: {" + "  terms: {" + "field: 'Year_Name',"
			+ "size: 2," + "order: {" + "  _term: 'desc'" + "}" + "}" + ","
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
function SelectMTSQuery(qstring)
{
	 document.getElementById("loc").innerHTML=qstring;
	 document.getElementById("cur").innerHTML=cur;
	 
//alert(qstring);
//alert(param);
  query = { query: { bool: { must: [ {match: { Month: amonth[mon]}}
  
	 ]}
}, 'size':0,
	  
	
  aggs: {
    1: {
      sum: {
        field: 'Ebidta'
      }
    },
    2: {
      sum: {
        field: 'Manufacturing'
      }
    },
    3: {
      sum: {
        field: 'MaterialCost'
      }
    },
    4: {
      sum: {
        field: 'AdminExpense'
      }
    },
    5: {
      sum: {
        field: 'Contribution'
      }
    },
    6: {
      sum: {
        field: 'NetRev'
      }
    },
    7: {
      sum: {
        field: 'OperatingCost'
      }
    },
    8: {
      sum: {
        field: 'PersonnelCost'
      }
    },
    9: {
      sum: {
        field: 'SellingExpense'
      }
    },
    10: {
      sum: {
        field: 'VarCost'
      }
    }
  }
}
  
  
  query_region =
  
  
  { query: { bool: { must: [ {match: { Month: amonth[mon]}},
                                           {match: { Region: qstring }}
                                           
	 ]}
  }, 'size':0,
	  
	   aggs: {
    1: {
      sum: {
        field: 'Ebidta'
      }
    },
    2: {
      sum: {
        field: 'Manufacturing'
      }
    },
    3: {
      sum: {
        field: 'MaterialCost'
      }
    },
    4: {
      sum: {
        field: 'AdminExpense'
      }
    },
    5: {
      sum: {
        field: 'Contribution'
      }
    },
    6: {
      sum: {
        field: 'NetRev'
      }
    },
    7: {
      sum: {
        field: 'OperatingCost'
      }
    },
    8: {
      sum: {
        field: 'PersonnelCost'
      }
    },
    9: {
      sum: {
        field: 'SellingExpense'
      }
    },
    10: {
      sum: {
        field: 'VarCost'
      }
    }
  }
}
  query_country ={ query: { bool: { must: [ {match: { Month: amonth[mon]}},
                                           {match: { Country: qstring}},
                                           
	 ]}}, 'size':0,
	  
	    aggs: {
    1: {
      sum: {
        field: 'Ebidta'
      }
    },
    2: {
      sum: {
        field: 'Manufacturing'
      }
    },
    3: {
      sum: {
        field: 'MaterialCost'
      }
    },
    4: {
      sum: {
        field: 'AdminExpense'
      }
    },
    5: {
      sum: {
        field: 'Contribution'
      }
    },
    6: {
      sum: {
        field: 'NetRev'
      }
    },
    7: {
      sum: {
        field: 'OperatingCost'
      }
    },
    8: {
      sum: {
        field: 'PersonnelCost'
      }
    },
    9: {
      sum: {
        field: 'SellingExpense'
      }
    },
    10: {
      sum: {
        field: 'VarCost'
      }
    }
  }
}
  
  
  
}
  /* MTD Query List End */
 /* YTD Query List */
/* MTD Query List Start */
function SelectYTDQuery(qstring)
{
//alert(qstring);
//alert(param);
	 query1 = {  query: { bool: { must: [ {match: { Year: actyr}}
                                          
                                         
                                           
	 ]}}, 'size':0,
	  
	
  aggs: {
    1: {
      sum: {
        field: 'Ebidta'
      }
    },
    2: {
      sum: {
        field: 'Manufacturing'
      }
    },
    3: {
      sum: {
        field: 'MaterialCost'
      }
    },
    4: {
      sum: {
        field: 'AdminExpense'
      }
    },
    5: {
      sum: {
        field: 'Contribution'
      }
    },
    6: {
      sum: {
        field: 'NetRev'
      }
    },
    7: {
      sum: {
        field: 'OperatingCost'
      }
    },
    8: {
      sum: {
        field: 'PersonnelCost'
      }
    },
    9: {
      sum: {
        field: 'SellingExpense'
      }
    },
    10: {
      sum: {
        field: 'VarCost'
      }
    }
  }
}
  
  
  query1_region =
   { query: { bool: { must: [ {match: { Year: actyr}},
	                         {match: { Region: qstring }}
                                           
	 ]}
  }, 'size' : 0,
	aggs: {
    1: {
      sum: {
        field: 'Ebidta'
      }
    },
    2: {
      sum: {
        field: 'Manufacturing'
      }
    },
    3: {
      sum: {
        field: 'MaterialCost'
      }
    },
    4: {
      sum: {
        field: 'AdminExpense'
      }
    },
    5: {
      sum: {
        field: 'Contribution'
      }
    },
    6: {
      sum: {
        field: 'NetRev'
      }
    },
    7: {
      sum: {
        field: 'OperatingCost'
      }
    },
    8: {
      sum: {
        field: 'PersonnelCost'
      }
    },
    9: {
      sum: {
        field: 'SellingExpense'
      }
    },
    10: {
      sum: {
        field: 'VarCost'
      }
    }
  }
}
	
	
	
  query1_country ={ query: { bool: { must: [     {match: { Year: actyr}},
												{match: { Country: qstring}}
                                           
	 ]}}, 'size':0,
	  
	aggs: {
    1: {
      sum: {
        field: 'Ebidta'
      }
    },
    2: {
      sum: {
        field: 'Manufacturing'
      }
    },
    3: {
      sum: {
        field: 'MaterialCost'
      }
    },
    4: {
      sum: {
        field: 'AdminExpense'
      }
    },
    5: {
      sum: {
        field: 'Contribution'
      }
    },
    6: {
      sum: {
        field: 'NetRev'
      }
    },
    7: {
      sum: {
        field: 'OperatingCost'
      }
    },
    8: {
      sum: {
        field: 'PersonnelCost'
      }
    },
    9: {
      sum: {
        field: 'SellingExpense'
      }
    },
    10: {
      sum: {
        field: 'VarCost'
      }
    }
  }
}
  
  
	 
	 
	  
	 

}





function SelectMTRQuery(qstring)
{

query2 = {

 query: { bool: { must: [ {match: { Month_Name: amonth[mon]}}
  
	 ]}
},
		'size' : 0,

		aggs: {
    BType: {
      terms: {
        field: 'BType',
        size: 10,
        order: {
          1: 'desc'
        }
      },
      aggs: {
        1: {
          sum: {
            field: 'Planned'
          }
        },
        3: {
          terms: {
            field: 'UOM',
            size: 10,
            order: {
              1: 'desc'
            }
          },
          aggs: {
            1: {
              sum: {
                field: 'Planned'
              }
            },
            4: {
              sum: {
                field: 'Capacity'
              }
            },
            5: {
              sum: {
                field: 'Production'
              }
            }
          }
        }
      }
    }
  }
}
  
  query2_region ={

 query: { bool: { must: [ {match: { Month_Name: amonth[mon]}},
						 {match: { Region: qstring}}
  
	 ]}
},
		'size' : 0,

		aggs: {
    BType: {
      terms: {
        field: 'BType',
        size: 10,
        order: {
          1: 'desc'
        }
      },
      aggs: {
        1: {
          sum: {
            field: 'Planned'
          }
        },
        3: {
          terms: {
            field: 'UOM',
            size: 10,
            order: {
              1: 'desc'
            }
          },
          aggs: {
            1: {
              sum: {
                field: 'Planned'
              }
            },
            4: {
              sum: {
                field: 'Capacity'
              }
            },
            5: {
              sum: {
                field: 'Production'
              }
            }
          }
        }
      }
    }
  }
}
 
query2_country =

{

 query: { bool: { must: [ {match: { Month_Name: amonth[mon]}},
	                           {match: { Country: qstring}}
  
	 ]}
},
		'size' : 0,

		aggs: {
    BType: {
      terms: {
        field: 'BType',
        size: 10,
        order: {
          1: 'desc'
        }
      },
      aggs: {
        1: {
          sum: {
            field: 'Planned'
          }
        },
        3: {
          terms: {
            field: 'UOM',
            size: 10,
            order: {
              1: 'desc'
            }
          },
          aggs: {
            1: {
              sum: {
                field: 'Planned'
              }
            },
            4: {
              sum: {
                field: 'Capacity'
              }
            },
            5: {
              sum: {
                field: 'Production'
              }
            }
          }
        }
      }
    }
  }
}
 
  
  
  

}






function SelectYTRQuery(qstring)
{

	 query3 ={

			query: {
				
				bool: {
					must: [{ match: { Year_Name:  actyr }}
						 
					 ]
						}
						
			}
			,
		'size' : 0,

		aggs: {
    BType: {
      terms: {
        field: 'BType',
        size: 10,
        order: {
          1: 'desc'
        }
      },
      aggs: {
        1: {
          sum: {
            field: 'Planned'
          }
        },
        3: {
          terms: {
            field: 'UOM',
            size: 10,
            order: {
              1: 'desc'
            }
          },
          aggs: {
            1: {
              sum: {
                field: 'Planned'
              }
            },
            4: {
              sum: {
                field: 'Capacity'
              }
            },
            5: {
              sum: {
                field: 'Production'
              }
            }
          }
        }
      }
    }
  }
}

  
  query3_region =

{

	query : {

		bool : {
			must : [ {
				match : {
					Year_Name : actyr
				}},
				 {match: { Region: qstring }}
			

			]
		}

	},
	'size':0,

			aggs: {
    BType: {
      terms: {
        field: 'BType',
        size: 10,
        order: {
          1: 'desc'
        }
      },
      aggs: {
        1: {
          sum: {
            field: 'Planned'
          }
        },
        3: {
          terms: {
            field: 'UOM',
            size: 10,
            order: {
              1: 'desc'
            }
          },
          aggs: {
            1: {
              sum: {
                field: 'Planned'
              }
            },
            4: {
              sum: {
                field: 'Capacity'
              }
            },
            5: {
              sum: {
                field: 'Production'
              }
            }
          }
        }
      }
    }
  }
}
	
	  query3_country =

	  {

	  	query : {

	  		bool : {
	  			must : [ {
	  				match : {
	  					Year_Name : actyr
	  				}},
	  				 {match: { Country: qstring }}
	  			

	  			]
	  		}

	  	},
	  	'size':0,

	  			aggs: {
    BType: {
      terms: {
        field: 'BType',
        size: 10,
        order: {
          1: 'desc'
        }
      },
      aggs: {
        1: {
          sum: {
            field: 'Planned'
          }
        },
        3: {
          terms: {
            field: 'UOM',
            size: 10,
            order: {
              1: 'desc'
            }
          },
          aggs: {
            1: {
              sum: {
                field: 'Planned'
              }
            },
            4: {
              sum: {
                field: 'Capacity'
              }
            },
            5: {
              sum: {
                field: 'Production'
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


	function MTDList(Param)
	{   
	 ///alert("Param"+Param);
	var mtd_query="";
	//alert(lvl);
	//alert(Param);

	  figl1 = "";figl2 = "";figl3 = "";figl4 = "";figl5 = "";figl6 = "";figl7 = "";figl8 = "";figl9 = "";figl10 = "";
		if(Param==1)
			mtd_query=query_region;
		else if(Param==2)
			mtd_query=query_country;
		else if(Param==3)
			mtd_query=query_kam;
		else
			mtd_query=query;
		
	$.ajax({
				url : 'http://192.168.10.142:9200/.figldata/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(mtd_query),
				// data: {"search": search_term},
				success : function(json) {
					//var qnt = "<tr class=odd><th>Qty</th><td align=right>";
					var first_act = 0, sec_act = 0, first_qnt = 0, sec_qnt = 0;
					
					//var rev_lcy=rev;
					// alert(""+JSON.parse(data.hits.hits.count));
					// $("#results").empty();
					// $("#results").append("<p>Results for <b>" +
					// $("#searchterm").val() + "</b></p>");
					// alert(json.aggregations[1].value);
					/*
					 * $('#graph1').html("<table ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
					 * 
					 */

					//for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) {
					//	if (i == 0) {
						
					
						
						

						

							

								
                         


							figl1 = "<tr class=even><td align=left>Net Revenue from Sales<td align=right>"+ numeral(json.aggregations[6].value.toFixed(0)).format('0,0') +"</td>"
							
							figl2 = "<tr class=odd><td align=left>Total Material Cost<td align=right>"+ numeral(json.aggregations[3].value.toFixed(0)).format('0,0') +"</td>"
							
							figl3 ="<tr class=odd><td align=left>Total Variable Cost<td align=right>"+ numeral(json.aggregations[10].value.toFixed(0)).format('0,0') +"</td>"
							
							figl4 = "<tr class=even><td align=left>Contribution<td align=right>"+ numeral(json.aggregations[5].value.toFixed(0)).format('0,0') +"</td>"
							
							figl5 = "<tr class=odd><td align=left>Total Manufacturing Expenses<td align=right>"+ numeral(json.aggregations[2].value.toFixed(0)).format('0,0') +"</td>"
							
							
							figl6 = "<tr class=odd><td align=left>Personnel Cost<td align=right>"+ numeral(json.aggregations[8].value.toFixed(0)).format('0,0') +"</td>"
							
							figl7 = "<tr class=even><td align=left>Total Administrative Expenses<td align=right>"+ numeral(json.aggregations[4].value.toFixed(0)).format('0,0') +"</td>"
							
							figl8 = "<tr class=even><td align=left>Selling and Distribution Expenses<td align=right>"+ numeral(json.aggregations[9].value.toFixed(0)).format('0,0') +"</td>"
							
							figl9 = "<tr class=odd><td align=left>Total Operating Cost<td align=right>"+ numeral(json.aggregations[7].value.toFixed(0)).format('0,0') +"</td>"
							
							figl10 ="<tr class=even><td align=left>Ebidta<td align=right>"+ numeral(json.aggregations[1].value.toFixed(0)).format('0,0') +"</td>"
							


							
							
							
							
					
					
					//figlData=rev;
                 
					  // $('#graph1').html(rev);
                	 

				}
			});
	}
	
	function YTDList(Param)
	{
	

		MTDList(param);


		var ytd_query="";
		if(Param==1)
			ytd_query=query1_region;
		else if(Param==2)
			ytd_query=query1_country;
		else if(Param==3)
			ytd_query=query1_kam;
		else
			ytd_query=query1;

	$
			.ajax({
				url : 'http://192.168.10.142:9200/.figldata/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(ytd_query),
				// data: {"search": search_term},
				success : function(json) {
				///var rev = "<table><caption>MTD Score</caption><thead><tr><td>Desc</td><td>Val.</td><td>Score </td></tr></thead><tbody>";
					//var qnt = "<tr class=odd><th>Qty</th><td align=right>";
					
					var rev = "<table><caption>EBDITA Unit Wise</caption><thead><tr><th>Desc</th><th>MTD</th><th>YTD </th></tr></thead><tbody>";
					
					var first_act = 0, sec_act = 0, first_qnt = 0, sec_qnt = 0;
					
					//var rev_lcy=rev;
					// alert(""+JSON.parse(data.hits.hits.count));
					// $("#results").empty();
					// $("#results").append("<p>Results for <b>" +
					// $("#searchterm").val() + "</b></p>");
					// alert(json.aggregations[1].value);
					/*
					 * $('#graph1').html("<table ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
					 * 
					 */

					//for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) {
					//	if (i == 0) {
						
					
						
						

						

							

								
                         


							figl1 = figl1+ "<td align=right>"+ numeral(json.aggregations[6].value.toFixed(0)).format('0,0') +"</td></tr>"
							
							figl2 = figl2+"<td align=right>"+ numeral(json.aggregations[3].value.toFixed(0)).format('0,0') +"</td></tr>"
							figl3 = figl3+ "<td align=right>"+ numeral(json.aggregations[10].value.toFixed(0)).format('0,0') +"</td></tr>"
							figl4 = figl4+ "<td align=right>"+ numeral(json.aggregations[5].value.toFixed(0)).format('0,0') +"</td></tr>"
							figl5 = figl5+ "<td align=right>"+ numeral(json.aggregations[2].value.toFixed(0)).format('0,0') +"</td></tr>"
							figl6 = figl6+ "<td align=right>"+ numeral(json.aggregations[8].value.toFixed(0)).format('0,0') +"</td></tr>"
							figl7 = figl7+ "<td align=right>"+ numeral(json.aggregations[4].value.toFixed(0)).format('0,0') +"</td></tr>"
							figl8 = figl8+ "<td align=right>"+ numeral(json.aggregations[9].value.toFixed(0)).format('0,0') +"</td></tr>"
							figl9 = figl9+ "<td align=right>"+ numeral(json.aggregations[7].value.toFixed(0)).format('0,0') +"</td></tr>"
							figl10 = figl10+ "<td align=right>"+ numeral(json.aggregations[1].value.toFixed(0)).format('0,0') +"</td></tr></table>"
							


							
							
							
							
					
					
					rev=rev+figl1+figl2+figl3+figl4+figl5+figl6+figl7+figl8+figl9+figl10;
                 
					   $('#graph1').html(rev);

					
				}
			});
	}
	
	function MonthlyTrends(Param)
	{
		mtr_lcy=""; 
	    mtr_usd="";
	    
		var mtr_query="";
		if(Param==1)
			mtr_query=query2_region;
		else if(Param==2)
			mtr_query=query2_country;
		else if(Param==3)
			mtr_query=query2_kam;
		else
			mtr_query=query2;

	$
			.ajax({
				url : 'http://192.168.10.142:9200/.proddata/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(mtr_query),
				// data: {"search": search_term},
				success : function(json) {
					var rev = "<table><caption>MTD Production Data</caption><thead><tr><th>BType</th><th>Plan.</td><th>Capacity.</th><th>Act.</th><th>UOM</th></tr></thead><tbody>";
					
					

					for ( var i = 0; i < json.aggregations.BType.buckets.length; i++) 
					{  
						
							
						 
							
							
                         
                            		var cls="even";
                            		if(i%2==0)
                            			cls="odd";
                            		
                            		
                            	
                            		
                            		
                            		
                            	
                            		
                            			
                            				
                            				rev=rev+"<tr class="+cls+"><td align=left>"
        								    + json.aggregations.BType.buckets[i].key
        								    + "</td><td align=right>"
        									
        								    + json.aggregations.BType.buckets[i][3].buckets[0][1].value.toFixed(4)
        									+ "</td><td align=right>"

											+ json.aggregations.BType.buckets[i][3].buckets[0][4].value.toFixed(4)
        									+ "</td><td align=right>"

											+ json.aggregations.BType.buckets[i][3].buckets[0][5].value.toFixed(4)
        									
        									+ "</td><td align=left>"
											+ json.aggregations.BType.buckets[i][3].buckets[0].key
        									+ "</td></tr>";
                                          
        									//json.aggregations.Workcenter.buckets[i][4].buckets[0].key
											//json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0].key
        									
                            			
                            		  
									
									
										
										
                            		
                            			
                            	
                            			
									
                            		 
                            			
                            			
                            			/* Chart Data */
                            			
                            			
        						        
                            	
						

					}
					
					
					
			
                 rev=rev+"</tbody></table>";

				
				
				
                 
				
				
				 $('#graph2').html(rev);
				
					
                   ///BudgetBarChart() 

				}
			});
	}

	
function YearlyTrends(Param)
	{
	
	   
		var ytr_query="";
		if(Param==1)
			ytr_query=query3_region;
		else if(Param==2)
			ytr_query=query3_country;
		else if(Param==3)
			ytr_query=query3_kam;
		else
			ytr_query=query3;

	$
			.ajax({
				url : 'http://192.168.10.142:9200/.proddata/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(ytr_query),
				// data: {"search": search_term},
				success : function(json) {
					var rev = "<table><caption>YTD Production Data</caption><thead><tr><th>BType</th><th>Plan.</td><th>Capacity.</th><th>Act.</th><th>UOM</th></tr></thead><tbody>";
					
					

					for ( var i = 0; i < json.aggregations.BType.buckets.length; i++) 
					{  
						
							
						 
							
							
                         
                            		var cls="even";
                            		if(i%2==0)
                            			cls="odd";
                            		
                            		
                            	
                            		
                            		
                            		
                            	
                            		
                            			
                            				
                            				rev=rev+"<tr class="+cls+"><td align=left>"
        								    + json.aggregations.BType.buckets[i].key
        								    + "</td><td align=right>"
        									
        								    + json.aggregations.BType.buckets[i][3].buckets[0][1].value.toFixed(4)
        									+ "</td><td align=right>"

											+ json.aggregations.BType.buckets[i][3].buckets[0][4].value.toFixed(4)
        									+ "</td><td align=right>"

											+ json.aggregations.BType.buckets[i][3].buckets[0][5].value.toFixed(4)
        									
        									+ "</td><td align=left>"
											+ json.aggregations.BType.buckets[i][3].buckets[0].key
        									+ "</td></tr>";
                                          
        									//json.aggregations.Workcenter.buckets[i][4].buckets[0].key
											//json.aggregations.Workcenter.buckets[i][4].buckets[0][5].buckets[0].key
        									
                            			
                            		  
									
									
										
										
                            		
                            			
                            	
                            			
									
                            		 
                            			
                            			
                            			/* Chart Data */
                            			
                            			
        						        
                            	
						

					}
					
					
					
			
                 rev=rev+"</tbody></table>";

				
				
				
              
				
				
				 $('#graphTable').html(rev);
				
					
                   ///BudgetBarChart() 

				}
			});
	}
	