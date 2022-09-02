const home = { lat: 20.378107, lng: 106.131793 };

export default {
    created() {
        this.geolocate();
    },
    data() {
        return {
            map: "",
            marker: "",
            center: home,
        };
    },
    methods: {
        createMarker: function (latlng) {
            this.marker = new window.google.maps.Marker({
                setMap: this.map,
                position: latlng,
                animation: window.google.maps.Animation.DROP,
            });
            this.addYourLocationButton();
        },
        geolocate: function () {
            navigator.geolocation.getCurrentPosition((position) => {
                let latlng = new window.google.maps.LatLng(
                    parseFloat(position.coords.latitude),
                    parseFloat(position.coords.longitude)
                );
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                this.createMarker(latlng);
            });
        },
        addYourLocationButton: function () {
            var controlDiv = document.createElement("div");

            var firstChild = document.createElement("button");
            firstChild.style.backgroundColor = "#fff";
            firstChild.style.border = "none";
            firstChild.style.outline = "none";
            firstChild.style.width = "28px";
            firstChild.style.height = "28px";
            firstChild.style.borderRadius = "2px";
            firstChild.style.boxShadow = "0 1px 4px rgba(0,0,0,0.3)";
            firstChild.style.cursor = "pointer";
            firstChild.style.marginRight = "10px";
            firstChild.style.padding = "0px";
            firstChild.title = "Your Location";
            controlDiv.appendChild(firstChild);

            var secondChild = document.createElement("div");
            secondChild.style.margin = "5px";
            secondChild.style.width = "18px";
            secondChild.style.height = "18px";
            secondChild.style.backgroundImage =
                "url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)";
            secondChild.style.backgroundSize = "180px 18px";
            secondChild.style.backgroundPosition = "0px 0px";
            secondChild.style.backgroundRepeat = "no-repeat";
            secondChild.id = "you_location_img";
            firstChild.appendChild(secondChild);

            window.google.maps.event.addListener(
                this.map,
                "center_changed",
                function () {
                    secondChild.style["background-position"] = "0 0";
                }
            );
            firstChild.addEventListener("click", function () {
                var imgX = "0";
                var animationInterval = setInterval(function () {
                    if (imgX === "-18") imgX = "0";
                    else imgX = "-18";
                    document.getElementById(
                        "you_location_img"
                    ).style.backgroundPosition = "0px 0px";
                }, 500);
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (
                        position
                    ) {
                        var latlng = new window.google.maps.LatLng(
                            position.coords.latitude,
                            position.coords.longitude
                        );
                        this.marker.setPosition(latlng);
                        this.map.setCenter(latlng);
                        clearInterval(animationInterval);
                        document.getElementById(
                            "you_location_img"
                        ).style.backgroundPosition = "-144px 0px";
                    });
                } else {
                    clearInterval(animationInterval);
                    document.getElementById(
                        "you_location_img"
                    ).style.backgroundPosition = "0px 0px";
                }
            });

            controlDiv.index = 1;
            this.map.controls[
                window.google.maps.ControlPosition.RIGHT_BOTTOM
            ].push(controlDiv);
        },
    },
};
