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
	var sites=[{"site":"Former Showcase Cinema property","siteLat":42.689130,"siteLng":-71.143711,"siteInfo":"It is a 14-acre city-owned lot.","transit":"Commuter rail stop in Lawrence","id":1},
        {"site":"Osgood Landing office","siteLat":42.731070,"siteLng":-71.114405,"siteInfo":"The complex is 168 acre along the Merrimack River.","transit":"Commuter rail stop in Lawrence","id":1},
        {"site":"Whaling City Golf Course","siteLat":41.658893,"siteLng":-70.957943,"siteInfo":"It is a 300-acre city-owned site slated for redevelopment","transit":"Bus","id":2},
        {"site":"Union Point","siteLat":42.165521,"siteLng":-70.938159,"siteInfo":"It is a 1550-acre formal navy base turned live-work-play complex","transit":"Commuter rail stop at Union Point","id":4},
        {"site":"Assembly Square","siteLat":42.392942,"siteLng":-71.080534,"siteInfo":"It would need to be part of a regional bid","transit":"Orange Line ","id":5},
        {"site":"Gateway Park","siteLat":42.273665,"siteLng":-71.806378,"siteInfo":"It was anchored by Worcester Polytechnic Institute","transit":"Commuter rail","id":6},
        {"site":"Suffolk Downs","siteLat":42.394576,"siteLng":-71.010499,"siteInfo":"It is a thoroughbred race track in East Boston.","transit":"Blue Line","id":7},
        {"site":"Billerica","siteLat":42.609995,"siteLng":-71.291785,"siteInfo":"It is a a property near the Commuter Rail, which also includes Tewksbury and a small bit of Lowell.","transit":"Blue Line","id":8}];

	// graphic code
	var cities = [{"city":"Haverhill","part":"3","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Commuter rail stop in Lawrence","id":1},
        {"city":"Lawrence","part":"3","site":"National Amusements","siteLat":42.199998,"siteLng":-71.176263,"siteInfo":"14-acre city-owned lot","transit":"Commuter rail stop in Lawrence","id":1},
        {"city":"North Andover","part":"3","site":"Osgood Landing office","siteLat":42.731070,"siteLng":-71.114405,"siteInfo":"The complex is 168 acre along the Merrimack River","transit":"Commuter rail stop in Lawrence","id":1},
        {"city":"New Bedford","part":"1","site":"Whaling City Golf Course","siteLat":41.658893,"siteLng":-70.957943,"siteInfo":"a 300-acre city-owned site slated for redevelopment","transit":"Bus","id":2},
        {"city":"Westfield","part":"9","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Bus","id":3},
        {"city":"Springfield","part":"9","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Bus","id":3},
        {"city":"Holyoke","part":"9","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Bus","id":3},
        {"city":"Chicopee","part":"9","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Bus","id":3},
        {"city":"Agawam","part":"9","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Bus","id":3},
        {"city":"West Springfield","part":"9","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Bus","id":3},
        {"city":"Northampton","part":"9","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Bus","id":3},
        {"city":"Greenfield","part":"9","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Bus","id":3},
        {"city":"Easthampton","part":"9","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Bus","id":3},
        {"city":"Rockland","part":"3","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Commuter rail stop at Union Point","id":4},
        {"city":"Weymouth","part":"3","site":"Union Point","siteLat":42.165521,"siteLng":-70.938159,"siteInfo":"1550-acre formal navy base turned live-work-play complex","transit":"Commuter rail stop at Union Point","id":4},
        {"city":"Abington","part":"3","site":"","siteLat":null,"siteLng":null,"siteInfo":"","transit":"Commuter rail stop at Union Point","id":4},
        {"city":"Somerville","part":"1","site":"Assembly Square","siteLat":42.392942,"siteLng":-71.080534,"siteInfo":"would need to be part of a regional bid","transit":"Orange Line ","id":5},
        {"city":"Worcester","part":"1","site":"Gateway Park","siteLat":42.273665,"siteLng":-71.806378,"siteInfo":"anchored by Worcester Polytechnic Institute","transit":"Commuter rail","id":6},
        {"city":"Boston","part":"1","site":"Suffolk Downs","siteLat":42.394576,"siteLng":-71.010499,"siteInfo":"","transit":"Blue Line","id":7},
        {"city":"Billerica","part":"1","site":"Suffolk Downs","siteLat":42.609995,"siteLng":-71.291785,"siteInfo":"","transit":"Commuter Rail","id":8}];

    //var dataUrl="https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4";
    var satelliteStreets = "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVybWlvbmV3eSIsImEiOiJjaXZ5OWI1MTYwMXkzMzFwYzNldTl0cXRoIn0.Uxs4L2MP0f58y5U-UqdWrQ";
    var streetLight ="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVybWlvbmV3eSIsImEiOiJjaXZ5OWI1MTYwMXkzMzFwYzNldTl0cXRoIn0.Uxs4L2MP0f58y5U-UqdWrQ";
    var streetColor ="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVybWlvbmV3eSIsImEiOiJjaXZ5OWI1MTYwMXkzMzFwYzNldTl0cXRoIn0.Uxs4L2MP0f58y5U-UqdWrQ";

    function style(feature) {
        return {
            fillColor: '#ffffff',
            weight: 1,
            opacity: 0.3,
            color: '#987d66',
            dashArray: '3',
            fillOpacity: 0.2
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
		L.marker ([t.siteLat, t.siteLng]).bindPopup('<p><span>'+ t.site +'</span><br/>Descriptions: '+ t.siteInfo+'<br/>Commute option: '+t.transit +'</p>').openPopup().addTo(map);
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
            '<p>' + obj.city+'<br/>' + isTeam(obj)+haveSite(obj.id) +'</p>'
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
            return "<br/> The site is to be decided."
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
