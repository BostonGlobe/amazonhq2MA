'use strict';
(function() {
	// global variables
    var wWidth = window.innerWidth;


	// called once on page load
	var init = function() {

	};

	// called automatically on article page resize
	window.onResize = function(width) {

	};

	// called when the graphic enters the viewport
	window.enterView = function() {

	};
	var sites=[{"site":"Former Showcase Cinema property","siteLat":42.68913,"siteLng":-71.143711,"siteType":"Potential site","siteInfo":"It is former Showcase Cinema property, a 14-acre city-owned lot.","transit":"Commuter rail stop in Lawrence","id":1,"sitePic":"http://photos.cinematreasures.org/production/photos/99764/1400530544/large.jpg?1400530544"},
        {"site":"Osgood Landing office","siteLat":42.73107,"siteLng":-71.114405,"siteType":"Main site","siteInfo":"It is a 168-acre-parcel along the Merrimack River, the former AT&T/Lucent Technologies manufacturing complex.","transit":"Commuter rail stop in Lawrence","id":1,"sitePic":"http://www.ozzyproperties.com/wp-content/uploads/2017/02/Osgood-Landing.jpg"},
        {"site":"Whaling City Golf Course","siteLat":41.658893,"siteLng":-70.957943,"siteType":"Potential site","siteInfo":"Tt is a 300-acre property owned by the city and is slated for redevelopment.","transit":"Bus","id":2,"sitePic":"http://wbsm.com/files/2017/05/20170419_135617.jpg?w=630&h=420&zc=1&s=0&a=t&q=89"},
        {"site":"Union Point","siteLat":42.165521,"siteLng":-70.938159,"siteType":"Potential site","siteInfo":"The former South Weymouth naval base that sits on 1,500 acres and straddles three towns. Being turned into a mega development featuring offices, housing, and amenities like restaurants.","transit":"Commuter rail stop at Union Point","id":4,"sitePic":"https://lh3.googleusercontent.com/proxy/wJit8NIb3yhnsw3sE2XdGXGZUvfm0quJUBLBXCCHoYshmLw6WiC4my3qA7LKzASeGcxfJ1LD4SuTv6P73irlFVVhpt8Ce8TCrLHh1NjsiW0FS25GKFcVCFgma2bJQPWIas9QHy0JyMLDK46RF9xZZB-93aUpGKc=w285-h160-k-no"},
        {"site":"Assembly Square","siteLat":42.392942,"siteLng":-71.080534,"siteType":"Potential site","siteInfo":"It would need to be part of a regional bid","transit":"Orange Line ","id":5,"sitePic":"http://worldlandscapearchitect.com/wp-content/uploads/2015/05/Baxter-1-565x375.jpg"},
        {"site":"Gateway Park","siteLat":42.273665,"siteLng":-71.806378,"siteType":"Potential site","siteInfo":"It is a research-business development co-owned by Worcester Polytechnic Institute; CitySquare, downtown project next to Union Station","transit":"Commuter rail","id":6,"sitePic":"https://www.wpi.edu/sites/default/files/2017/04/05/WP%20Oct11%20%20255.2.jpg"},
        {"site":"Suffolk Downs","siteLat":42.394576,"siteLng":-71.010499,"siteType":"Potential site","siteInfo":"It is a thoroughbred race track in East Boston.","transit":"Blue Line","id":7,"sitePic":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Suffolk_Downs.jpg/250px-Suffolk_Downs.jpg"},
        {"site":"A collection of lots","siteLat":42.609995,"siteLng":-71.291785,"siteType":"Potential site","siteInfo":"It is off Billerica Avenue, near Baker Commodities and Commuter Rail.","transit":"Commuter Rail","id":8,"sitePic":""}];

	// graphic code
	var cities = [{"city":"Haverhill","part":3,"mayor":null,"cityInfo":"Plan to file a regional bid with two other cities.","site":"","siteLat":"null","siteLng":"null","siteInfo":"","transit":"Commuter rail stop in Lawrence","id":1},
        {"city":"Lawrence","part":3,"mayor":null,"cityInfo":"Plan to file a regional bid with two other cities.","site":"Former Showcase Cinema property","siteLat":"42.689130","siteLng":"-71.143711","siteInfo":"It's a 14-acre city-owned lot.","transit":"Commuter rail stop in Lawrence","id":1},
        {"city":"North Andover","part":3,"mayor":null,"cityInfo":"Plan to file a regional bid with two other cities.","site":"Osgood Landing office","siteLat":"42.73107","siteLng":"-71.114405","siteInfo":"It's 168-parcel along the Merrimack River, the former AT&T/Lucent Technologies manufacturing complex.","transit":"Commuter rail stop in Lawrence","id":1},
        {"city":"New Bedford","part":1,"mayor":null,"cityInfo":"Strongly considering a bid","site":"Whaling City Golf Course","siteLat":"41.658893","siteLng":"-70.957943","siteInfo":"It's a 300-acre property owned by the city and that is slated for redevelopment","transit":"Bus","id":2},
        {"city":"Westfield","part":9,"mayor":null,"cityInfo":"Weighing regional bid involving nine cities organized by <br/>the Economic Development Council of Western Massachusetts. ","site":"","siteLat":"null","siteLng":"null","siteInfo":"Potential sites to be determined.","transit":"Bus","id":3},
        {"city":"Springfield","part":9,"mayor":null,"cityInfo":"Weighing regional bid involving nine cities organized by <br/>the Economic Development Council of Western Massachusetts. ","site":"","siteLat":"null","siteLng":"null","siteInfo":"Potential sites to be determined.","transit":"Bus","id":3},
        {"city":"Holyoke","part":9,"mayor":null,"cityInfo":"Weighing regional bid involving nine cities organized by <br/>the Economic Development Council of Western Massachusetts. ","site":"","siteLat":"null","siteLng":"null","siteInfo":"Potential sites to be determined.","transit":"Bus","id":3},
        {"city":"Chicopee","part":9,"mayor":null,"cityInfo":"Weighing regional bid involving nine cities organized by <br/>the Economic Development Council of Western Massachusetts. ","site":"","siteLat":"null","siteLng":"null","siteInfo":"Potential sites to be determined.","transit":"Bus","id":3},
        {"city":"Agawam","part":9,"mayor":null,"cityInfo":"Weighing regional bid involving nine cities organized by <br/>the Economic Development Council of Western Massachusetts. ","site":"","siteLat":"null","siteLng":"null","siteInfo":"Potential sites to be determined.","transit":"Bus","id":3},
        {"city":"West Springfield","part":9,"mayor":null,"cityInfo":"Weighing regional bid involving nine cities organized by <br/>the Economic Development Council of Western Massachusetts. ","site":"","siteLat":"null","siteLng":"null","siteInfo":"Potential sites to be determined.","transit":"Bus","id":3},
        {"city":"Northampton","part":9,"mayor":null,"cityInfo":"Weighing regional bid involving nine cities organized by <br/>the Economic Development Council of Western Massachusetts. ","site":"","siteLat":"null","siteLng":"null","siteInfo":"Potential sites to be determined.","transit":"Bus","id":3},
        {"city":"Greenfield","part":9,"mayor":null,"cityInfo":"Weighing regional bid involving nine cities organized by <br/>the Economic Development Council of Western Massachusetts. ","site":"","siteLat":"null","siteLng":"null","siteInfo":"Potential sites to be determined.","transit":"Bus","id":3},
        {"city":"Easthampton","part":9,"mayor":null,"cityInfo":"Weighing regional bid involving nine cities organized by <br/>the Economic Development Council of Western Massachusetts. ","site":"","siteLat":"null","siteLng":"null","siteInfo":"Potential sites to be determined.","transit":"Bus","id":3},
        {"city":"Rockland","part":3,"mayor":null,"cityInfo":"Plan to file a regional bid with two other cities.","site":"","siteLat":"null","siteLng":"null","siteInfo":"","transit":"Commuter rail stop at Union Point","id":4},
        {"city":"Weymouth","part":3,"mayor":null,"cityInfo":"Plan to file a regional bid with two other cities.","site":"Union Point","siteLat":"42.165521","siteLng":"-70.938159","siteInfo":"The former South Weymouth naval base that sits on 1,500 acres and straddles three towns. Being turned into a mega development featuring offices, housing, and amenities like restaurants.","transit":"Commuter rail stop at Union Point","id":4},
        {"city":"Abington","part":3,"mayor":null,"cityInfo":"Plan to file a regional bid with two other cities.","site":"","siteLat":"null","siteLng":"null","siteInfo":"","transit":"Commuter rail stop at Union Point","id":4},
        {"city":"Somerville","part":1,"mayor":null,"cityInfo":"It would need to be part of a regional bid.","site":"Assembly Square","siteLat":"42.392942","siteLng":"-71.080534","siteInfo":"It would need to be part of a regional bid","transit":"Orange Line ","id":5},
        {"city":"Worcester","part":1,"mayor":null,"cityInfo":"Hope to be part of state application.","site":"Gateway Park","siteLat":"42.273665","siteLng":"-71.806378","siteInfo":"a research-business development co-owned by Worcester Polytechnic Institute; CitySquare, downtown project next to Union Station","transit":"Commuter rail","id":6},
        {"city":"Boston","part":1,"mayor":null,"cityInfo":"Plan to file a bid.","site":"Suffolk Downs","siteLat":"42.394576","siteLng":"-71.010499","siteInfo":"","transit":"Blue Line","id":7},
        {"city":"Billerica","part":3,"mayor":null,"cityInfo":"Working on an application with two other cities.","site":"A collection of lots","siteLat":"42.609995","siteLng":"-71.291785","siteInfo":"It's off Billerica Avenue, near Baker Commodities and Commuter Rail.","transit":"Commuter Rail","id":8},
        {"city":"Tewksbury","part":3,"mayor":null,"cityInfo":"Working on an application with two other cities.","site":"","siteLat":"","siteLng":"","siteInfo":"","transit":"Commuter rail","id":8},
        {"city":"Lowell","part":3,"mayor":null,"cityInfo":"Working on an application with two other cities.","site":"","siteLat":"","siteLng":"","siteInfo":"","transit":"Commuter rail","id":8}];


    //var dataUrl="https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4";
    var satelliteStreets = "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVybWlvbmV3eSIsImEiOiJjaXZ5OWI1MTYwMXkzMzFwYzNldTl0cXRoIn0.Uxs4L2MP0f58y5U-UqdWrQ";
    var streetLight ="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVybWlvbmV3eSIsImEiOiJjaXZ5OWI1MTYwMXkzMzFwYzNldTl0cXRoIn0.Uxs4L2MP0f58y5U-UqdWrQ";
    var streetColor ="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVybWlvbmV3eSIsImEiOiJjaXZ5OWI1MTYwMXkzMzFwYzNldTl0cXRoIn0.Uxs4L2MP0f58y5U-UqdWrQ";

    function style(feature) {
        return {
            fillColor: '#d4d4d4',
            weight: 1,
            opacity: 0.3,
            color: '#987d66',
            dashArray: '3',
            fillOpacity: 0.4
        };
    }
    // graphic code
	var map =  L.map("map",{scrollWheelZoom:false});


    if(wWidth<= 720){

        map.setView([42.243, -71.872], 8);
    } else {
        map.setView([42.243, -71.872], 9);
    }

        // d3.queue()
        //     .defer(d3.csv, './assets/hq2Cities.csv')
        //     .await(function(err, data){
        //         console.log(data);
        //     });

    var streetMap = L.tileLayer(streetLight, {
        id: 'mapbox.street',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);


	sites.forEach(function (t) {
		L.marker ([t.siteLat, t.siteLng]).bindPopup('<p><span>'+ t.site +'</span> ('+ t.siteType +')<br/>'+ t.siteInfo+'</p>').openPopup().addTo(map);
	});

    var shpfile = new L.Shapefile('assets/towns.zip', {

        style: function(feature) {
        	if(feature.properties['TOWN']){
                return isBidding(feature.properties['TOWN'])? {color: "#ff9900"}: style();
			}
            return style();
        },
        onEachFeature: function(feature, layer) {

            // layer.bindPopup(feature.properties['TOWN']);
        	//console.log(feature);
            if (isBidding(feature.properties['TOWN'])) {
            	var arr= getInfo(feature.properties['TOWN']);
                  //  layer.bindPopup(arr.city);
                layer.bindPopup(arr.city);
                layer.on({
                    mouseover: highlightFeature,
                    mouseout: resetHighlight
                });
            }
        }
    });
    shpfile.addTo(map);
    shpfile.once("data:loaded", function() {
        console.log("finished loaded shapefile");
    });

    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

// method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        //console.log(props);
        var obj= (props)? getInfo(props["TOWN"]):{info:"Hover over a town"};
        this._div.innerHTML = '<h4>Which cities are bidding for Amazon HQ2? </h4>' +  (props ?
            '<p>' + obj.city+'<br/>' + obj.cityInfo + haveSite(obj.id)+'</p>'
            : obj.info);
    };

    info.addTo(map);
    function jsUcfirst(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function isTeam(obj) {
        if(obj.part-1){
            return "The city plans to team up with "+(obj.part-1)+" other towns.";
        }else {
            return [];
        }
    }
    function haveSite(id) {
        if(id==3){
            return "<br/> The sites are to be determined."
        }else{
            return [];
        }
    }

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 3,
            color: '#ff6808',
            dashArray: '',
            fillOpacity: 0.5
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        info.update(layer.feature.properties);
    }
    function resetHighlight(e) {
        var layer = e.target;
        shpfile.resetStyle(e.target);
        info.update();
    }

    function getInfo(city) {
    	var obj;
        cities.forEach(function (t) {
            if(t.city.toUpperCase() == city){
                obj = t;
            }
        });
        return obj;

    }
	function isBidding(city) {
		var isBidding= false;
		cities.forEach(function (t) {
			if(t.city.toUpperCase() == city){
				isBidding = true;
			}
		});
			return isBidding;

    }

    // run code
	init();
})();
