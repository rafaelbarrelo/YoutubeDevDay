function YoutubeCTRL($scope, $http) {

  $scope.youtubeURL = "http://www.youtube.com/embed/W13qDdJDHp8";

  $scope.url = "http://gdata.youtube.com/feeds/api/videos?q=dogs&alt=json-in-script&callback=?&max-results=12&start-index=1";

  $scope.data = Array();

  $scope.getData = function() {
    $http.get('https://www.googleapis.com/youtube/v3/videoCategories\\?part=snippet&regionCode=BR&key=AIzaSyDTa1AZ-NHheqfEeVLG350m6u7TqnbB-2E').
      success(function(data, status, headers, config) {
        $scope.data = data.items;
      }).
      error(function(data, status, headers, config) {
      });
  }

  $scope.getData();

}