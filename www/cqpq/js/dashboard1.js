


var query2 = "";

var sin = [], sin2 = [], cos = [], pie = [],cat=[],cat_lcy=[],sin2_lcy = [], cos_lcy = [];

var lineChartData = "";

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
function changeCurDisplay(pcur)
{  
   document.getElementById("cur").innerHTML=pcur;
	if(pcur=="USD")
		{
		 $('#graph1').html(mtd_usd);
		 $('#graph2').html(ytd_usd);
		 
		}
	else
		{
		$('#graph1').html(mtd_lcy);
		$('#graph2').html(ytd_lcy);
		
		}
	LineChart();
	 CatChart();
		
}
var dashboard1 = (function() {

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
					+'<div class="container">' + '<div class="row">'
					+ '<div class="col-xs-12">'
				
					+ '<div id="graph1"></div>' + '</div></div>' +

					'<div class="row">' + '<div class="col-xs-12">'
					
					+ '<div id="graph2"></div>' + '</div></div>' 

				
					+ '<div class="title"><table ><caption>Monthly Revenue Trend</caption></table></div>'
					
					+ '<div style="width:100%;height:350" >' + '<div>'
					+ '<canvas id="canvas" height="350" width="600"></canvas>'
					+ '</div>' + '<div id="legendDiv"></div>' + '</div>'
					+ '<div class="row">' + '<div class="col-xs-12">'
					+ '<div class="title"><table ><caption>Category Wise Performance</caption></table></div>'
					+ '<svg id="graph4" ></svg>' + '</div></div>' +

					'</div>';

			$("#content").html(html);
			
			
			SelectMTSQuery(qstring);
			MTDList(param);
			SelectYTDQuery(qstring);
			YTDList(param);
			SelectMTRQuery(qstring);
			MonthlyTrends(param);
			SelectCatQuery(qstring);
			CategoryContribution(param);
			
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
  query = { query: { bool: { must: [ {match: { Month_name: amonth[mon]}}
  
	 ]}
}, 'size':0,
	  
	  aggs: { Month: { terms: { field: 'Year_Name', size: 2, order: { _term:
	  'desc' } } , aggs: { 1: { sum: { field: 'Revenue' } },
	  
	  
	  2: { sum: { field: 'Revenue_Plan' } }, 3: { sum: { field:
	  'Sales_quantity' } }, 4: { sum: { field: 'Sales_Plan' } }, 5: { max: {
	  field: 'MonthYr' } },6: { avg: {
		  field: 'ExchRate' } }  }
	
	 
	 
	  }
	 }}
  
  
  query_region =
  
  
  { query: { bool: { must: [ {match: { Month_name: amonth[mon]}},
                                           {match: { Region: qstring }}
                                           
	 ]}
  }, 'size':0,
	  
	  aggs: { Month: { terms: { field: 'Year_Name', size: 2, order: { _term:
	  'desc' } } , aggs: { 1: { sum: { field: 'Revenue' } },
	  
	  
	  2: { sum: { field: 'Revenue_Plan' } }, 3: { sum: { field:
	  'Sales_quantity' } }, 4: { sum: { field: 'Sales_Plan' } }, 5: { max: {
	  field: 'MonthYr' } },6: { avg: {
		  field: 'ExchRate' } }  }
	
	 
	 
	  }
	 }}
  query_country ={ query: { bool: { must: [ {match: { Month_name: amonth[mon]}},
                                           {match: { Country: qstring}},
                                           
	 ]}}, 'size':0,
	  
	  aggs: { Month: { terms: { field: 'Year_Name', size: 2, order: { _term:
	  'desc' } } , aggs: { 1: { sum: { field: 'Revenue' } },
	  
	  
	  2: { sum: { field: 'Revenue_Plan' } }, 3: { sum: { field:
	  'Sales_quantity' } }, 4: { sum: { field: 'Sales_Plan' } }, 5: { max: {
	  field: 'MonthYr' } },6: { avg: {
		  field: 'ExchRate' } } }
	
	 
	 
	  }
	 }}
  
  
  query_kam ={ query: { bool: { must: [ {match: { Month_name: amonth[mon]}},
                                           {match: { Sales_Group: qstring }},
                                         
                                           
	 ]}}, 'size':0,
	  
	  aggs: { Month: { terms: { field: 'Year_Name', size: 2, order: { _term:
	  'desc' } } , aggs: { 1: { sum: { field: 'Revenue' } },
	  
	  
	  2: { sum: { field: 'Revenue_Plan' } }, 3: { sum: { field:
	  'Sales_quantity' } }, 4: { sum: { field: 'Sales_Plan' } }, 5: { max: {
	  field: 'MonthYr' } },6: { avg: {
		  field: 'ExchRate' } } }
	
	 
	 
	  }
	 }}
}
  /* MTD Query List End */
 /* YTD Query List */
/* MTD Query List Start */
function SelectYTDQuery(qstring)
{
//alert(qstring);
//alert(param);
	 query1 = {  'size' : 0,
	aggs : {
		Month : {
			terms : {
				field : 'Year_Name',
				size : 2,
				order : {
					_term : 'desc'
				}
			},
			aggs : {
				1 : {
					sum : {
						field : 'Revenue'
					}
				},

				2 : {
					sum : {
						field : 'Revenue_Plan'
					}
				},
				3 : {
					sum : {
						field : 'Sales_quantity'
					}
				},
				4 : {
					sum : {
						field : 'Sales_Plan'
					}
				},
				6: { avg: {
					  field: 'ExchRate' } }

			}

		}

	}
}
  
  
  query1_region =
   { query: { bool: { must: [ {match: { Region: qstring }}
                                           
	 ]}
  }, 'size' : 0,
	aggs : {
		Month : {
			terms : {
				field : 'Year_Name',
				size : 2,
				order : {
					_term : 'desc'
				}
			},
			aggs : {
				1 : {
					sum : {
						field : 'Revenue'
					}
				},

				2 : {
					sum : {
						field : 'Revenue_Plan'
					}
				},
				3 : {
					sum : {
						field : 'Sales_quantity'
					}
				},
				4 : {
					sum : {
						field : 'Sales_Plan'
					}
				},
				6: { avg: {
					  field: 'ExchRate' } }

			}

		}

	}
}
	
	
	
  query1_country ={ query: { bool: { must: [{match: { Country: qstring}}
                                           
	 ]}}, 'size':0,
	  
	 aggs : {
			Month : {
				terms : {
					field : 'Year_Name',
					size : 2,
					order : {
						_term : 'desc'
					}
				},
				aggs : {
					1 : {
						sum : {
							field : 'Revenue'
						}
					},

					2 : {
						sum : {
							field : 'Revenue_Plan'
						}
					},
					3 : {
						sum : {
							field : 'Sales_quantity'
						}
					},
					4 : {
						sum : {
							field : 'Sales_Plan'
						}
					},
					6: { avg: {
						  field: 'ExchRate' } }

				}

			}

		}
	}
  
  
	 
	 query1_kam ={ query: { bool: { must: [{match: { Sales_Group: qstring}}
      
		 ]}}, 'size':0,
		  
		 aggs : {
				Month : {
					terms : {
						field : 'Year_Name',
						size : 2,
						order : {
							_term : 'desc'
						}
					},
					aggs : {
						1 : {
							sum : {
								field : 'Revenue'
							}
						},

						2 : {
							sum : {
								field : 'Revenue_Plan'
							}
						},
						3 : {
							sum : {
								field : 'Sales_quantity'
							}
						},
						4 : {
							sum : {
								field : 'Sales_Plan'
							}
						},
						6: { avg: {
							  field: 'ExchRate' } }

					}

				}

			}
		}
	  
	 

}





function SelectMTRQuery(qstring)
{

query2 = {

		query : {

			bool : {
				must : [ {
					match : {
						Year_Name : actyr
					}
				}

				]
			}

		},
		'size' : 0,

		aggs : {
			Month : {
				terms : {
					field : 'MonthYr',
					size : 12,
					order : {
						_term : 'asc'
					}
				},

				aggs : {
					1 : {
						sum : {
							field : 'Revenue'
						}
					},

					2 : {
						sum : {
							field : 'Revenue_Plan'
						}
					},
					3 : {
						sum : {
							field : 'Sales_quantity'
						}
					},
					4 : {
						sum : {
							field : 'Sales_Plan'
						}
					},
					6: { avg: {
						  field: 'ExchRate' } }

				}

			}

		}
	}
  
  
  query2_region =

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
	'size' : 0,

	aggs : {
		Month : {
			terms : {
				field : 'MonthYr',
				size : 12,
				order : {
					_term : 'asc'
				}
			},

			aggs : {
				1 : {
					sum : {
						field : 'Revenue'
					}
				},

				2 : {
					sum : {
						field : 'Revenue_Plan'
					}
				},
				3 : {
					sum : {
						field : 'Sales_quantity'
					}
				},
				4 : {
					sum : {
						field : 'Sales_Plan'
					}
				},
				6: { avg: {
					  field: 'ExchRate' } }

			}

		}

	}}

query2_country =

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
	'size' : 0,

	aggs : {
		Month : {
			terms : {
				field : 'MonthYr',
				size : 12,
				order : {
					_term : 'asc'
				}
			},

			aggs : {
				1 : {
					sum : {
						field : 'Revenue'
					}
				},

				2 : {
					sum : {
						field : 'Revenue_Plan'
					}
				},
				3 : {
					sum : {
						field : 'Sales_quantity'
					}
				},
				4 : {
					sum : {
						field : 'Sales_Plan'
					}
				},
				6: { avg: {
					  field: 'ExchRate' } }

			}

		}

	}}

  
  
  query2_kam ={

		query : {

			bool : {
				must : [ {
					match : {
						Year_Name : actyr
					}},
					 {match: { Sales_Group: qstring }}
				

				]
			}

		},
		'size' : 0,

		aggs : {
			Month : {
				terms : {
					field : 'MonthYr',
					size : 12,
					order : {
						_term : 'asc'
					}
				},

				aggs : {
					1 : {
						sum : {
							field : 'Revenue'
						}
					},

					2 : {
						sum : {
							field : 'Revenue_Plan'
						}
					},
					3 : {
						sum : {
							field : 'Sales_quantity'
						}
					},
					4 : {
						sum : {
							field : 'Sales_Plan'
						}
					},
					6: { avg: {
						  field: 'ExchRate' } }

				}

			}

		}}

}






function SelectCatQuery(qstring)
{

	 query3 ={

			query: {
				
				bool: {
					must: [{ match: { Year_Name:  actyr }}
						 
					 ]
						}
						
			},
			'size':0,

			aggs: {
			    Month: {
			      terms: {
			        field: 'Category_Grp',
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
			    },
			    6: { avg: {
					  field: 'ExchRate' } }
			    
			  }
				

			}


			}}

  
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
	    Month: {
	      terms: {
	        field: 'Category_Grp',
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
	    },
	    6: { avg: {
			  field: 'ExchRate' } }
	    
	    
	  }
		

	}


	}}

	
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
	  	    Month: {
	  	      terms: {
	  	        field: 'Category_Grp',
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
	  	    },
	  	    6: { avg: {
	  			  field: 'ExchRate' } }
	  	    
	  	    
	  	  }
	  		

	  	}


	  	}}
  
	 
  query3_kam ={

			  	query : {

			  		bool : {
			  			must : [ {
			  				match : {
			  					Year_Name : actyr
			  				}},
			  				 {match: { Sales_Group: qstring }}
			  			

			  			]
			  		}

			  	},
			  	'size':0,

			  	aggs: {
			  	    Month: {
			  	      terms: {
			  	        field: 'Category_Grp',
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
			  	    },
			  	    6: { avg: {
			  			  field: 'ExchRate' } }
			  	    
			  	    
			  	  }
			  		

			  	}


			  	}}


}
//	(qstring);




/* Render the dashboard */


	function MTDList(Param)
	{   mtd_lcy=""; 
	    mtd_usd="";
	 ///alert("Param"+Param);
	var mtd_query="";
	//alert(lvl);
	//alert(Param);
		if(Param==1)
			mtd_query=query_region;
		else if(Param==2)
			mtd_query=query_country;
		else if(Param==3)
			mtd_query=query_kam;
		else
			mtd_query=query;
		
	$.ajax({
				url : 'http://192.168.10.142:9200/.salesdata/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(mtd_query),
				// data: {"search": search_term},
				success : function(json) {
					var rev = "<table><caption>MTD View</caption><thead><tr><td></td><td>Bud.</td><td>Act.</td><td>Prev.Act.</td><td>Growth</td></tr></thead><tbody><tr><th>Rev</th><td align=right>";
					var qnt = "<tr class=odd><th>Qty</th><td align=right>";
					var first_act = 0, sec_act = 0, first_qnt = 0, sec_qnt = 0;
					
					var rev_lcy=rev;
					// alert(""+JSON.parse(data.hits.hits.count));
					// $("#results").empty();
					// $("#results").append("<p>Results for <b>" +
					// $("#searchterm").val() + "</b></p>");
					// alert(json.aggregations[1].value);
					/*
					 * $('#graph1').html("<table ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
					 * 
					 */

					for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) {
						if (i == 0) {
						
					
							rev = rev
							+ numeral(json.aggregations.Month.buckets[i][2].value
									.toFixed(0)).format('0,0')
							+ "</td><td align=right>"
							+ numeral(json.aggregations.Month.buckets[i][1].value
									.toFixed(0)).format('0,0') + "</td><td align=right>";
							
							rev_lcy = rev_lcy
							+ numeral(json.aggregations.Month.buckets[i][2].value
									.toFixed(2)*json.aggregations.Month.buckets[i][6].value
									.toFixed(4)).format('0,0')
							+ "</td><td align=right>"
							+ numeral(json.aggregations.Month.buckets[i][1].value
									.toFixed(2)*json.aggregations.Month.buckets[i][6].value
									.toFixed(4)).format('0,0') + "</td><td align=right>";
							
							
							
					qnt = qnt
							+ numeral(json.aggregations.Month.buckets[i][4].value
									.toFixed(0)).format('0,0')
							+ "</td><td align=right>"
							+ numeral(json.aggregations.Month.buckets[i][3].value
									.toFixed(0)).format('0,0') + "</td><td align=right>";
					
					
					
					
							first_act = json.aggregations.Month.buckets[i][1].value
									.toFixed(0);
							first_qnt = json.aggregations.Month.buckets[i][3].value
									.toFixed(0);

						} else {
                             
							rev = rev
									+ numeral((json.aggregations.Month.buckets[i][1].value
											.toFixed(0)/nom)*dom).format('0,0') + "</td>";

							qnt = qnt
									+ numeral((json.aggregations.Month.buckets[i][3].value
											.toFixed(0)/nom)*dom).format('0,0') + "</td>";

							
							rev_lcy = rev_lcy
							+ numeral(((json.aggregations.Month.buckets[i][1].value
									.toFixed(2)*json.aggregations.Month.buckets[i][6].value
									.toFixed(4))/nom)*dom).format('0,0') + "</td>";

							
					
							sec_act = json.aggregations.Month.buckets[i][1].value
									.toFixed(0);
							sec_qnt = json.aggregations.Month.buckets[i][3].value
									.toFixed(0);

							first_act = first_act - sec_act;
							first_qnt = first_qnt - sec_qnt;

							if (first_act > 0) {

								rev = rev
										+ "<td align=center><img src='../img/up.png'></img></td></tr>";
								rev_lcy = rev_lcy
								+ "<td align=center><img src='../img/up.png'></img></td></tr>";

					
							
							} else {
								rev = rev
										+ "<td align=center><img src='../img/down.png'></img></td></tr>";
							
								rev_lcy = rev_lcy
								+ "<td align=center><img src='../img/down.png'></img></td></tr>";
				
							}

							if (first_qnt > 0) {

								qnt = qnt
										+ "<td align=center><img src='../img/up.png'></img></td></tr></table>";
							
							} else {
								qnt = qnt
										+ "<td align=center><img src='../img/down.png'></img></td></tr></tbody></table>";
							
								
							}

						}

					}
					rev = rev + qnt;
					rev_lcy = rev_lcy + qnt;
					mtd_lcy=rev_lcy; 
				    mtd_usd=rev;
					
                   if(cur=="USD")
                	   {
					   $('#graph1').html(rev);
                	   }
                   else
                	   {
                	    
                	   $('#graph1').html(rev_lcy);
                	   }

				}
			});
	}
	
	function YTDList(Param)
	{
		ytd_lcy=""; 
	    ytd_usd="";
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
				url : 'http://192.168.10.142:9200/.salesdata/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(ytd_query),
				// data: {"search": search_term},
				success : function(json) {
					var rev = "<table><caption>YTD View</caption><thead><tr><td></td><td>Bud.</td><td>Act.</td><td>Prev.Act.</td><td>Growth</td></tr></thead><tbody><tr><th>Rev</th><td align=right>";
					var qnt = "<tr class=odd><th>Qty</th><td align=right>";
					var first_act = 0, sec_act = 0, first_qnt = 0, sec_qnt = 0;
					var rev_lcy=rev;
					/*
					 * $('#graph2').html("<table ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
					 */
					for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) {
						if (i == 0) {
							rev = rev
									+ numeral(json.aggregations.Month.buckets[i][2].value
											.toFixed(0)).format('0,0')
									+ "</td><td align=right>"
									+ numeral(json.aggregations.Month.buckets[i][1].value
											.toFixed(0)).format('0,0') + "</td><td align=right>";
							
							rev_lcy = rev_lcy
							+ numeral(json.aggregations.Month.buckets[i][2].value
									.toFixed(2)*json.aggregations.Month.buckets[i][6].value
									.toFixed(4)).format('0,0')
							+ "</td><td align=right>"
							+ numeral(json.aggregations.Month.buckets[i][1].value
									.toFixed(2)*json.aggregations.Month.buckets[i][6].value
									.toFixed(4)).format('0,0') + "</td><td align=right>";
							
							
							qnt = qnt
									+ numeral(json.aggregations.Month.buckets[i][4].value
											.toFixed(0)).format('0,0')
									+ "</td><td align=right>"
									+ numeral(json.aggregations.Month.buckets[i][3].value
											.toFixed(0)).format('0,0') + "</td><td align=right>";
							first_act = json.aggregations.Month.buckets[i][1].value
									.toFixed(0);
							first_qnt = json.aggregations.Month.buckets[i][3].value
									.toFixed(0);

						} else {
							
                            
							rev = rev
									+ numeral((json.aggregations.Month.buckets[i][1].value
											.toFixed(0)/365*doy)).format('0,0') + "</td>";
							qnt = qnt
									+ numeral((json.aggregations.Month.buckets[i][3].value
											.toFixed(0)/365*doy)).format('0,0') + "</td>";
							
							rev_lcy = rev_lcy
							+ numeral(((json.aggregations.Month.buckets[i][1].value
									.toFixed(2)*json.aggregations.Month.buckets[i][6].value
									.toFixed(4)))/365*doy).format('0,0') + "</td>";

							

							sec_act = numeral(json.aggregations.Month.buckets[i][1].value
									.toFixed(0)).format('0,0');
							sec_qnt = numeral(json.aggregations.Month.buckets[i][3].value
									.toFixed(0)).format('0,0');

							first_act = first_act - sec_act;
							first_qnt = first_qnt - sec_qnt;

							if (first_act > 0) {

								rev = rev
										+ "<td align=center><img src='../img/up.png'></img></td></tr>";
								rev_lcy = rev_lcy
								+ "<td align=center><img src='../img/up.png'></img></td></tr>";

							
							} else {
								rev = rev
										+ "<td align=center><img src='../img/down.png'></img></td></tr>";
								
								rev_lcy = rev_lcy
								+ "<td align=center><img src='../img/down.png'></img></td></tr>";
				
							}

							if (first_qnt > 0) {

								qnt = qnt
										+ "<td align=center><img src='../img/up.png'></img></td></tr></table>";

							} else {
								qnt = qnt
										+ "<td align=center><img src='../img/down.png'></img></td></tr></tbody></table>";
							}
						}

					}
					rev = rev + qnt;
					
					rev_lcy = rev_lcy + qnt;
					
					ytd_lcy=rev_lcy; 
				    ytd_usd=rev;
					
                   if(cur=="USD")
                	   {
					   $('#graph2').html(rev);
                	   }
                   else
                	   {
                	    
                	   $('#graph2').html(rev_lcy);
                	   }

					
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
				url : 'http://192.168.10.142:9200/.salesdata/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(mtr_query),
				// data: {"search": search_term},
				success : function(json) {
					var rev = "<table><thead><tr><td>Month</td><td>Bud.</td><td>Act.</td></tr></thead><tbody>";
					
					sin = [], sin2 = [], cos = [], pie = [],
					sin2_lcy = [], cos_lcy = [];

					// alert(""+JSON.parse(data.hits.hits.count));
					// $("#results").empty();
					// $("#results").append("<p>Results for <b>" +
					// $("#searchterm").val() + "</b></p>");
					// alert(json.aggregations.Month.buckets.length);
					for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) {

						// sin.push({x: i, y: 100});
						// sin2.push({x: i, y: 110});
						// alert(month[parseInt(json.aggregations.Month.buckets[i].key_as_string.substring(5,
						// 7))]);
						sin
								.push(month[parseInt(json.aggregations.Month.buckets[i].key_as_string
										.substring(5, 7))]);
						sin2
								.push(json.aggregations.Month.buckets[i][2].value
										.toFixed(0));
						cos
								.push(json.aggregations.Month.buckets[i][1].value
										.toFixed(0));
						
						sin2_lcy.push((json.aggregations.Month.buckets[i][2].value
								.toFixed(0)*json.aggregations.Month.buckets[i][6].value
								.toFixed(4)).toFixed(0));
				        cos_lcy.push((json.aggregations.Month.buckets[i][1].value
								.toFixed(0)*json.aggregations.Month.buckets[i][6].value
								.toFixed(4)).toFixed(0));
				
				
						/*
						pie
								.push({
									label : month[parseInt(json.aggregations.Month.buckets[i].key_as_string
											.substring(5, 7))],
									value : json.aggregations.Month.buckets[i][1].value
											.toFixed(0)
								});
                          */
						// /cos.push({label:month[parseInt(json.aggregations.Month.buckets[i].key_as_string.substring(5,
						// 7))],value:
						// json.aggregations.Month.buckets[i][1].value.toFixed(0)});
						// json.aggregations.Month.buckets[i][1].key
					}
					// alert(json.aggregations.Month.buckets[0].key);
					// alert(json.aggregations.Month.buckets[0][1].value);

					// $('#chart2>.graph').html("<table
					// ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+
					// "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+
					// "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+
					// "</table>" );

					// someCallBack();
					LineChart();
					///PieChart();

				}
			});
	}

	function LineChart() {
		chartdata();
		var ctx = document.getElementById("canvas").getContext("2d");
		var myLine = new Chart(ctx).Line(lineChartData, {
			responsive : true
		});

		document.getElementById("legendDiv").innerHTML = myLine
				.generateLegend();
	}

	
	/*
	function PieChart() {

		var mydata = pie;
		var height = 350;
		var width = 350;

		var chart1;
		nv.addGraph(function() {
			var chart1 = nv.models.pieChart().x(function(d) {
				return d.label
			}).y(function(d) {
				return d.value
			}).showLabels(true) // Display pie labels
			.labelThreshold(.05) // Configure the minimum slice size for
									// labels to show up
			.labelType("percent") // Configure what type of data to show
									// in the label. Can be "key", "value"
									// or "percent"
			.donut(true) // Turn on Donut mode. Makes pie chart look
							// tasty!
			.donutRatio(0.35) // Configure how big you want the donut hole
								// size to be.
			;

			d3.select("#graph4").datum(mydata).transition().duration(350)
					.call(chart1);
			nv.utils.windowResize(chart1.update);
			return chart1;

		});

	}
*/
	function chartdata() {
		var dta=cos;
		var dts_pln=sin2;
      if(cur=="USD")
    	  {
    	  dta=cos;
    	  dts_pln=sin2;
    	  }
      else
    	  {
    	  dta=cos_lcy;
    	  dts_pln=sin2_lcy;
    	  
    	  
    	  }
      
		lineChartData = {
			labels : sin,
			datasets : [ {
				label : "Planned",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : dts_pln
			}, {
				label : "Actual",
				fillColor : "rgba(151,187,205,0.2)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(151,187,205,1)",
				data : dta
			} ]

		}

	}

	
	
	
	function CategoryContribution(Param)
	{
		
		var cat_query="";
		if(Param==1)
			cat_query=query3_region;
		else if(Param==2)
			cat_query=query3_country;
		else if(Param==3)
			cat_query=query3_kam;
		else
			cat_query=query3;

	$
			.ajax({
				url : 'http://192.168.10.142:9200/.salesdata/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(cat_query),
				// data: {"search": search_term},
				success : function(json) {

					 cat = [],cat_lcy=[];

					// alert(""+JSON.parse(data.hits.hits.count));
					// $("#results").empty();
					// $("#results").append("<p>Results for <b>" +
					// $("#searchterm").val() + "</b></p>");
					// alert(json.aggregations.Month.buckets.length);
					for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) {

						cat.push({label:json.aggregations.Month.buckets[i].key,value: json.aggregations.Month.buckets[i][1].value.toFixed(0)});
						
						cat_lcy.push({label:json.aggregations.Month.buckets[i].key,value: numeral(json.aggregations.Month.buckets[i][1].value.toFixed(0)*json.aggregations.Month.buckets[i][6].value
							.toFixed(4))});
					       
					}
					// alert(json.aggregations.Month.buckets[0].key);
					// alert(json.aggregations.Month.buckets[0][1].value);

					// $('#chart2>.graph').html("<table
					// ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+
					// "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+
					// "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+
					// "</table>" );

					// someCallBack();
					CatChart();
					

				}
			});
	}
	
	
	function CatChart() {

		
		
		var mydata=cat;
		
      if(cur=="USD")
    	  {
    	  mydata=cat;
    	 
    	  }
      else
    	  {
    	  mydata=cat_lcy;
    	  
    	  }
		 
	
	    var height = 350;
	    var width = 350;

	    var chart1;
	    nv.addGraph(function() {
	        var chart1 = nv.models.pieChart()
	      .x(function(d) { return d.label })
	      .y(function(d) { return d.value })
	      .showLabels(true)     //Display pie labels
	      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
	      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
	      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
	      .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
	      ;

	    d3.select("#graph4")
	        .datum(mydata)
	        .transition().duration(350)
	        .call(chart1);

	        return chart1;

	    });

	   



		}
	
