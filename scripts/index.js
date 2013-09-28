function YoutubeCTRL($scope, $http) {

  $scope.youtubeURL = "http://www.youtube.com/embed/W13qDdJDHp8";

  $scope.url = "http://gdata.youtube.com/feeds/api/videos?q=dogs&alt=json-in-script&callback=?&max-results=12&start-index=1";


  $http.get('https://www.googleapis.com/youtube/v3/videoCategories\\?part=snippet&regionCode=BR&key=AIzaSyDTa1AZ-NHheqfEeVLG350m6u7TqnbB-2E').
    success(function(data, status, headers, config) {
      data;
      // this callback will be called asynchronously
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

}