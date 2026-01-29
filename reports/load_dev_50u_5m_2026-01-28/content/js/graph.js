/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 796.0, "series": [{"data": [[0.0, 35.0], [0.1, 35.0], [0.2, 35.0], [0.3, 35.0], [0.4, 35.0], [0.5, 35.0], [0.6, 35.0], [0.7, 35.0], [0.8, 35.0], [0.9, 35.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 85.0], [1.4, 85.0], [1.5, 85.0], [1.6, 85.0], [1.7, 85.0], [1.8, 85.0], [1.9, 85.0], [2.0, 85.0], [2.1, 85.0], [2.2, 85.0], [2.3, 85.0], [2.4, 85.0], [2.5, 96.0], [2.6, 96.0], [2.7, 96.0], [2.8, 96.0], [2.9, 96.0], [3.0, 96.0], [3.1, 96.0], [3.2, 96.0], [3.3, 96.0], [3.4, 96.0], [3.5, 96.0], [3.6, 96.0], [3.7, 117.0], [3.8, 117.0], [3.9, 117.0], [4.0, 117.0], [4.1, 117.0], [4.2, 117.0], [4.3, 117.0], [4.4, 117.0], [4.5, 117.0], [4.6, 117.0], [4.7, 117.0], [4.8, 117.0], [4.9, 121.0], [5.0, 121.0], [5.1, 121.0], [5.2, 121.0], [5.3, 121.0], [5.4, 121.0], [5.5, 121.0], [5.6, 121.0], [5.7, 121.0], [5.8, 121.0], [5.9, 121.0], [6.0, 121.0], [6.1, 122.0], [6.2, 122.0], [6.3, 122.0], [6.4, 122.0], [6.5, 122.0], [6.6, 122.0], [6.7, 122.0], [6.8, 122.0], [6.9, 122.0], [7.0, 122.0], [7.1, 122.0], [7.2, 122.0], [7.3, 122.0], [7.4, 127.0], [7.5, 127.0], [7.6, 127.0], [7.7, 127.0], [7.8, 127.0], [7.9, 127.0], [8.0, 127.0], [8.1, 127.0], [8.2, 127.0], [8.3, 127.0], [8.4, 127.0], [8.5, 127.0], [8.6, 129.0], [8.7, 129.0], [8.8, 129.0], [8.9, 129.0], [9.0, 129.0], [9.1, 129.0], [9.2, 129.0], [9.3, 129.0], [9.4, 129.0], [9.5, 129.0], [9.6, 129.0], [9.7, 129.0], [9.8, 131.0], [9.9, 131.0], [10.0, 131.0], [10.1, 131.0], [10.2, 131.0], [10.3, 131.0], [10.4, 131.0], [10.5, 131.0], [10.6, 131.0], [10.7, 131.0], [10.8, 131.0], [10.9, 131.0], [11.0, 133.0], [11.1, 133.0], [11.2, 133.0], [11.3, 133.0], [11.4, 133.0], [11.5, 133.0], [11.6, 133.0], [11.7, 133.0], [11.8, 133.0], [11.9, 133.0], [12.0, 133.0], [12.1, 133.0], [12.2, 147.0], [12.3, 147.0], [12.4, 147.0], [12.5, 147.0], [12.6, 147.0], [12.7, 147.0], [12.8, 147.0], [12.9, 147.0], [13.0, 147.0], [13.1, 147.0], [13.2, 147.0], [13.3, 147.0], [13.4, 147.0], [13.5, 149.0], [13.6, 149.0], [13.7, 149.0], [13.8, 149.0], [13.9, 149.0], [14.0, 149.0], [14.1, 149.0], [14.2, 149.0], [14.3, 149.0], [14.4, 149.0], [14.5, 149.0], [14.6, 149.0], [14.7, 160.0], [14.8, 160.0], [14.9, 160.0], [15.0, 160.0], [15.1, 160.0], [15.2, 160.0], [15.3, 160.0], [15.4, 160.0], [15.5, 160.0], [15.6, 160.0], [15.7, 160.0], [15.8, 160.0], [15.9, 166.0], [16.0, 166.0], [16.1, 166.0], [16.2, 166.0], [16.3, 166.0], [16.4, 166.0], [16.5, 166.0], [16.6, 166.0], [16.7, 166.0], [16.8, 166.0], [16.9, 166.0], [17.0, 166.0], [17.1, 166.0], [17.2, 166.0], [17.3, 166.0], [17.4, 166.0], [17.5, 166.0], [17.6, 166.0], [17.7, 166.0], [17.8, 166.0], [17.9, 166.0], [18.0, 166.0], [18.1, 166.0], [18.2, 166.0], [18.3, 168.0], [18.4, 168.0], [18.5, 168.0], [18.6, 168.0], [18.7, 168.0], [18.8, 168.0], [18.9, 168.0], [19.0, 168.0], [19.1, 168.0], [19.2, 168.0], [19.3, 168.0], [19.4, 168.0], [19.5, 168.0], [19.6, 168.0], [19.7, 168.0], [19.8, 168.0], [19.9, 168.0], [20.0, 168.0], [20.1, 168.0], [20.2, 168.0], [20.3, 168.0], [20.4, 168.0], [20.5, 168.0], [20.6, 168.0], [20.7, 168.0], [20.8, 172.0], [20.9, 172.0], [21.0, 172.0], [21.1, 172.0], [21.2, 172.0], [21.3, 172.0], [21.4, 172.0], [21.5, 172.0], [21.6, 172.0], [21.7, 172.0], [21.8, 172.0], [21.9, 172.0], [22.0, 175.0], [22.1, 175.0], [22.2, 175.0], [22.3, 175.0], [22.4, 175.0], [22.5, 175.0], [22.6, 175.0], [22.7, 175.0], [22.8, 175.0], [22.9, 175.0], [23.0, 175.0], [23.1, 175.0], [23.2, 176.0], [23.3, 176.0], [23.4, 176.0], [23.5, 176.0], [23.6, 176.0], [23.7, 176.0], [23.8, 176.0], [23.9, 176.0], [24.0, 176.0], [24.1, 176.0], [24.2, 176.0], [24.3, 176.0], [24.4, 182.0], [24.5, 182.0], [24.6, 182.0], [24.7, 182.0], [24.8, 182.0], [24.9, 182.0], [25.0, 182.0], [25.1, 182.0], [25.2, 182.0], [25.3, 182.0], [25.4, 182.0], [25.5, 182.0], [25.6, 182.0], [25.7, 183.0], [25.8, 183.0], [25.9, 183.0], [26.0, 183.0], [26.1, 183.0], [26.2, 183.0], [26.3, 183.0], [26.4, 183.0], [26.5, 183.0], [26.6, 183.0], [26.7, 183.0], [26.8, 183.0], [26.9, 186.0], [27.0, 186.0], [27.1, 186.0], [27.2, 186.0], [27.3, 186.0], [27.4, 186.0], [27.5, 186.0], [27.6, 186.0], [27.7, 186.0], [27.8, 186.0], [27.9, 186.0], [28.0, 186.0], [28.1, 187.0], [28.2, 187.0], [28.3, 187.0], [28.4, 187.0], [28.5, 187.0], [28.6, 187.0], [28.7, 187.0], [28.8, 187.0], [28.9, 187.0], [29.0, 187.0], [29.1, 187.0], [29.2, 187.0], [29.3, 193.0], [29.4, 193.0], [29.5, 193.0], [29.6, 193.0], [29.7, 193.0], [29.8, 193.0], [29.9, 193.0], [30.0, 193.0], [30.1, 193.0], [30.2, 193.0], [30.3, 193.0], [30.4, 193.0], [30.5, 193.0], [30.6, 193.0], [30.7, 193.0], [30.8, 193.0], [30.9, 193.0], [31.0, 193.0], [31.1, 193.0], [31.2, 193.0], [31.3, 193.0], [31.4, 193.0], [31.5, 193.0], [31.6, 193.0], [31.7, 193.0], [31.8, 229.0], [31.9, 229.0], [32.0, 229.0], [32.1, 229.0], [32.2, 229.0], [32.3, 229.0], [32.4, 229.0], [32.5, 229.0], [32.6, 229.0], [32.7, 229.0], [32.8, 229.0], [32.9, 229.0], [33.0, 238.0], [33.1, 238.0], [33.2, 238.0], [33.3, 238.0], [33.4, 238.0], [33.5, 238.0], [33.6, 238.0], [33.7, 238.0], [33.8, 238.0], [33.9, 238.0], [34.0, 238.0], [34.1, 238.0], [34.2, 247.0], [34.3, 247.0], [34.4, 247.0], [34.5, 247.0], [34.6, 247.0], [34.7, 247.0], [34.8, 247.0], [34.9, 247.0], [35.0, 247.0], [35.1, 247.0], [35.2, 247.0], [35.3, 247.0], [35.4, 278.0], [35.5, 278.0], [35.6, 278.0], [35.7, 278.0], [35.8, 278.0], [35.9, 278.0], [36.0, 278.0], [36.1, 278.0], [36.2, 278.0], [36.3, 278.0], [36.4, 278.0], [36.5, 278.0], [36.6, 282.0], [36.7, 282.0], [36.8, 282.0], [36.9, 282.0], [37.0, 282.0], [37.1, 282.0], [37.2, 282.0], [37.3, 282.0], [37.4, 282.0], [37.5, 282.0], [37.6, 282.0], [37.7, 282.0], [37.8, 282.0], [37.9, 284.0], [38.0, 284.0], [38.1, 284.0], [38.2, 284.0], [38.3, 284.0], [38.4, 284.0], [38.5, 284.0], [38.6, 284.0], [38.7, 284.0], [38.8, 284.0], [38.9, 284.0], [39.0, 284.0], [39.1, 297.0], [39.2, 297.0], [39.3, 297.0], [39.4, 297.0], [39.5, 297.0], [39.6, 297.0], [39.7, 297.0], [39.8, 297.0], [39.9, 297.0], [40.0, 297.0], [40.1, 297.0], [40.2, 297.0], [40.3, 299.0], [40.4, 299.0], [40.5, 299.0], [40.6, 299.0], [40.7, 299.0], [40.8, 299.0], [40.9, 299.0], [41.0, 299.0], [41.1, 299.0], [41.2, 299.0], [41.3, 299.0], [41.4, 299.0], [41.5, 299.0], [41.6, 299.0], [41.7, 299.0], [41.8, 299.0], [41.9, 299.0], [42.0, 299.0], [42.1, 299.0], [42.2, 299.0], [42.3, 299.0], [42.4, 299.0], [42.5, 299.0], [42.6, 299.0], [42.7, 311.0], [42.8, 311.0], [42.9, 311.0], [43.0, 311.0], [43.1, 311.0], [43.2, 311.0], [43.3, 311.0], [43.4, 311.0], [43.5, 311.0], [43.6, 311.0], [43.7, 311.0], [43.8, 311.0], [43.9, 311.0], [44.0, 312.0], [44.1, 312.0], [44.2, 312.0], [44.3, 312.0], [44.4, 312.0], [44.5, 312.0], [44.6, 312.0], [44.7, 312.0], [44.8, 312.0], [44.9, 312.0], [45.0, 312.0], [45.1, 312.0], [45.2, 324.0], [45.3, 324.0], [45.4, 324.0], [45.5, 324.0], [45.6, 324.0], [45.7, 324.0], [45.8, 324.0], [45.9, 324.0], [46.0, 324.0], [46.1, 324.0], [46.2, 324.0], [46.3, 324.0], [46.4, 331.0], [46.5, 331.0], [46.6, 331.0], [46.7, 331.0], [46.8, 331.0], [46.9, 331.0], [47.0, 331.0], [47.1, 331.0], [47.2, 331.0], [47.3, 331.0], [47.4, 331.0], [47.5, 331.0], [47.6, 332.0], [47.7, 332.0], [47.8, 332.0], [47.9, 332.0], [48.0, 332.0], [48.1, 332.0], [48.2, 332.0], [48.3, 332.0], [48.4, 332.0], [48.5, 332.0], [48.6, 332.0], [48.7, 332.0], [48.8, 336.0], [48.9, 336.0], [49.0, 336.0], [49.1, 336.0], [49.2, 336.0], [49.3, 336.0], [49.4, 336.0], [49.5, 336.0], [49.6, 336.0], [49.7, 336.0], [49.8, 336.0], [49.9, 336.0], [50.0, 345.0], [50.1, 345.0], [50.2, 345.0], [50.3, 345.0], [50.4, 345.0], [50.5, 345.0], [50.6, 345.0], [50.7, 345.0], [50.8, 345.0], [50.9, 345.0], [51.0, 345.0], [51.1, 345.0], [51.2, 345.0], [51.3, 349.0], [51.4, 349.0], [51.5, 349.0], [51.6, 349.0], [51.7, 349.0], [51.8, 349.0], [51.9, 349.0], [52.0, 349.0], [52.1, 349.0], [52.2, 349.0], [52.3, 349.0], [52.4, 349.0], [52.5, 365.0], [52.6, 365.0], [52.7, 365.0], [52.8, 365.0], [52.9, 365.0], [53.0, 365.0], [53.1, 365.0], [53.2, 365.0], [53.3, 365.0], [53.4, 365.0], [53.5, 365.0], [53.6, 365.0], [53.7, 376.0], [53.8, 376.0], [53.9, 376.0], [54.0, 376.0], [54.1, 376.0], [54.2, 376.0], [54.3, 376.0], [54.4, 376.0], [54.5, 376.0], [54.6, 376.0], [54.7, 376.0], [54.8, 376.0], [54.9, 412.0], [55.0, 412.0], [55.1, 412.0], [55.2, 412.0], [55.3, 412.0], [55.4, 412.0], [55.5, 412.0], [55.6, 412.0], [55.7, 412.0], [55.8, 412.0], [55.9, 412.0], [56.0, 412.0], [56.1, 419.0], [56.2, 419.0], [56.3, 419.0], [56.4, 419.0], [56.5, 419.0], [56.6, 419.0], [56.7, 419.0], [56.8, 419.0], [56.9, 419.0], [57.0, 419.0], [57.1, 419.0], [57.2, 419.0], [57.3, 419.0], [57.4, 424.0], [57.5, 424.0], [57.6, 424.0], [57.7, 424.0], [57.8, 424.0], [57.9, 424.0], [58.0, 424.0], [58.1, 424.0], [58.2, 424.0], [58.3, 424.0], [58.4, 424.0], [58.5, 424.0], [58.6, 427.0], [58.7, 427.0], [58.8, 427.0], [58.9, 427.0], [59.0, 427.0], [59.1, 427.0], [59.2, 427.0], [59.3, 427.0], [59.4, 427.0], [59.5, 427.0], [59.6, 427.0], [59.7, 427.0], [59.8, 432.0], [59.9, 432.0], [60.0, 432.0], [60.1, 432.0], [60.2, 432.0], [60.3, 432.0], [60.4, 432.0], [60.5, 432.0], [60.6, 432.0], [60.7, 432.0], [60.8, 432.0], [60.9, 432.0], [61.0, 440.0], [61.1, 440.0], [61.2, 440.0], [61.3, 440.0], [61.4, 440.0], [61.5, 440.0], [61.6, 440.0], [61.7, 440.0], [61.8, 440.0], [61.9, 440.0], [62.0, 440.0], [62.1, 440.0], [62.2, 450.0], [62.3, 450.0], [62.4, 450.0], [62.5, 450.0], [62.6, 450.0], [62.7, 450.0], [62.8, 450.0], [62.9, 450.0], [63.0, 450.0], [63.1, 450.0], [63.2, 450.0], [63.3, 450.0], [63.4, 450.0], [63.5, 450.0], [63.6, 450.0], [63.7, 450.0], [63.8, 450.0], [63.9, 450.0], [64.0, 450.0], [64.1, 450.0], [64.2, 450.0], [64.3, 450.0], [64.4, 450.0], [64.5, 450.0], [64.6, 450.0], [64.7, 472.0], [64.8, 472.0], [64.9, 472.0], [65.0, 472.0], [65.1, 472.0], [65.2, 472.0], [65.3, 472.0], [65.4, 472.0], [65.5, 472.0], [65.6, 472.0], [65.7, 472.0], [65.8, 472.0], [65.9, 480.0], [66.0, 480.0], [66.1, 480.0], [66.2, 480.0], [66.3, 480.0], [66.4, 480.0], [66.5, 480.0], [66.6, 480.0], [66.7, 480.0], [66.8, 480.0], [66.9, 480.0], [67.0, 480.0], [67.1, 488.0], [67.2, 488.0], [67.3, 488.0], [67.4, 488.0], [67.5, 488.0], [67.6, 488.0], [67.7, 488.0], [67.8, 488.0], [67.9, 488.0], [68.0, 488.0], [68.1, 488.0], [68.2, 488.0], [68.3, 495.0], [68.4, 495.0], [68.5, 495.0], [68.6, 495.0], [68.7, 495.0], [68.8, 495.0], [68.9, 495.0], [69.0, 495.0], [69.1, 495.0], [69.2, 495.0], [69.3, 495.0], [69.4, 495.0], [69.5, 495.0], [69.6, 505.0], [69.7, 505.0], [69.8, 505.0], [69.9, 505.0], [70.0, 505.0], [70.1, 505.0], [70.2, 505.0], [70.3, 505.0], [70.4, 505.0], [70.5, 505.0], [70.6, 505.0], [70.7, 505.0], [70.8, 507.0], [70.9, 507.0], [71.0, 507.0], [71.1, 507.0], [71.2, 507.0], [71.3, 507.0], [71.4, 507.0], [71.5, 507.0], [71.6, 507.0], [71.7, 507.0], [71.8, 507.0], [71.9, 507.0], [72.0, 508.0], [72.1, 508.0], [72.2, 508.0], [72.3, 508.0], [72.4, 508.0], [72.5, 508.0], [72.6, 508.0], [72.7, 508.0], [72.8, 508.0], [72.9, 508.0], [73.0, 508.0], [73.1, 508.0], [73.2, 510.0], [73.3, 510.0], [73.4, 510.0], [73.5, 510.0], [73.6, 510.0], [73.7, 510.0], [73.8, 510.0], [73.9, 510.0], [74.0, 510.0], [74.1, 510.0], [74.2, 510.0], [74.3, 510.0], [74.4, 518.0], [74.5, 518.0], [74.6, 518.0], [74.7, 518.0], [74.8, 518.0], [74.9, 518.0], [75.0, 518.0], [75.1, 518.0], [75.2, 518.0], [75.3, 518.0], [75.4, 518.0], [75.5, 518.0], [75.6, 518.0], [75.7, 532.0], [75.8, 532.0], [75.9, 532.0], [76.0, 532.0], [76.1, 532.0], [76.2, 532.0], [76.3, 532.0], [76.4, 532.0], [76.5, 532.0], [76.6, 532.0], [76.7, 532.0], [76.8, 532.0], [76.9, 539.0], [77.0, 539.0], [77.1, 539.0], [77.2, 539.0], [77.3, 539.0], [77.4, 539.0], [77.5, 539.0], [77.6, 539.0], [77.7, 539.0], [77.8, 539.0], [77.9, 539.0], [78.0, 539.0], [78.1, 568.0], [78.2, 568.0], [78.3, 568.0], [78.4, 568.0], [78.5, 568.0], [78.6, 568.0], [78.7, 568.0], [78.8, 568.0], [78.9, 568.0], [79.0, 568.0], [79.1, 568.0], [79.2, 568.0], [79.3, 569.0], [79.4, 569.0], [79.5, 569.0], [79.6, 569.0], [79.7, 569.0], [79.8, 569.0], [79.9, 569.0], [80.0, 569.0], [80.1, 569.0], [80.2, 569.0], [80.3, 569.0], [80.4, 569.0], [80.5, 577.0], [80.6, 577.0], [80.7, 577.0], [80.8, 577.0], [80.9, 577.0], [81.0, 577.0], [81.1, 577.0], [81.2, 577.0], [81.3, 577.0], [81.4, 577.0], [81.5, 577.0], [81.6, 577.0], [81.7, 577.0], [81.8, 601.0], [81.9, 601.0], [82.0, 601.0], [82.1, 601.0], [82.2, 601.0], [82.3, 601.0], [82.4, 601.0], [82.5, 601.0], [82.6, 601.0], [82.7, 601.0], [82.8, 601.0], [82.9, 601.0], [83.0, 606.0], [83.1, 606.0], [83.2, 606.0], [83.3, 606.0], [83.4, 606.0], [83.5, 606.0], [83.6, 606.0], [83.7, 606.0], [83.8, 606.0], [83.9, 606.0], [84.0, 606.0], [84.1, 606.0], [84.2, 611.0], [84.3, 611.0], [84.4, 611.0], [84.5, 611.0], [84.6, 611.0], [84.7, 611.0], [84.8, 611.0], [84.9, 611.0], [85.0, 611.0], [85.1, 611.0], [85.2, 611.0], [85.3, 611.0], [85.4, 622.0], [85.5, 622.0], [85.6, 622.0], [85.7, 622.0], [85.8, 622.0], [85.9, 622.0], [86.0, 622.0], [86.1, 622.0], [86.2, 622.0], [86.3, 622.0], [86.4, 622.0], [86.5, 622.0], [86.6, 634.0], [86.7, 634.0], [86.8, 634.0], [86.9, 634.0], [87.0, 634.0], [87.1, 634.0], [87.2, 634.0], [87.3, 634.0], [87.4, 634.0], [87.5, 634.0], [87.6, 634.0], [87.7, 634.0], [87.8, 634.0], [87.9, 636.0], [88.0, 636.0], [88.1, 636.0], [88.2, 636.0], [88.3, 636.0], [88.4, 636.0], [88.5, 636.0], [88.6, 636.0], [88.7, 636.0], [88.8, 636.0], [88.9, 636.0], [89.0, 636.0], [89.1, 650.0], [89.2, 650.0], [89.3, 650.0], [89.4, 650.0], [89.5, 650.0], [89.6, 650.0], [89.7, 650.0], [89.8, 650.0], [89.9, 650.0], [90.0, 650.0], [90.1, 650.0], [90.2, 650.0], [90.3, 655.0], [90.4, 655.0], [90.5, 655.0], [90.6, 655.0], [90.7, 655.0], [90.8, 655.0], [90.9, 655.0], [91.0, 655.0], [91.1, 655.0], [91.2, 655.0], [91.3, 655.0], [91.4, 655.0], [91.5, 655.0], [91.6, 655.0], [91.7, 655.0], [91.8, 655.0], [91.9, 655.0], [92.0, 655.0], [92.1, 655.0], [92.2, 655.0], [92.3, 655.0], [92.4, 655.0], [92.5, 655.0], [92.6, 655.0], [92.7, 669.0], [92.8, 669.0], [92.9, 669.0], [93.0, 669.0], [93.1, 669.0], [93.2, 669.0], [93.3, 669.0], [93.4, 669.0], [93.5, 669.0], [93.6, 669.0], [93.7, 669.0], [93.8, 669.0], [93.9, 669.0], [94.0, 676.0], [94.1, 676.0], [94.2, 676.0], [94.3, 676.0], [94.4, 676.0], [94.5, 676.0], [94.6, 676.0], [94.7, 676.0], [94.8, 676.0], [94.9, 676.0], [95.0, 676.0], [95.1, 676.0], [95.2, 691.0], [95.3, 691.0], [95.4, 691.0], [95.5, 691.0], [95.6, 691.0], [95.7, 691.0], [95.8, 691.0], [95.9, 691.0], [96.0, 691.0], [96.1, 691.0], [96.2, 691.0], [96.3, 691.0], [96.4, 712.0], [96.5, 712.0], [96.6, 712.0], [96.7, 712.0], [96.8, 712.0], [96.9, 712.0], [97.0, 712.0], [97.1, 712.0], [97.2, 712.0], [97.3, 712.0], [97.4, 712.0], [97.5, 712.0], [97.6, 757.0], [97.7, 757.0], [97.8, 757.0], [97.9, 757.0], [98.0, 757.0], [98.1, 757.0], [98.2, 757.0], [98.3, 757.0], [98.4, 757.0], [98.5, 757.0], [98.6, 757.0], [98.7, 757.0], [98.8, 796.0], [98.9, 796.0], [99.0, 796.0], [99.1, 796.0], [99.2, 796.0], [99.3, 796.0], [99.4, 796.0], [99.5, 796.0], [99.6, 796.0], [99.7, 796.0], [99.8, 796.0], [99.9, 796.0]], "isOverall": false, "label": "List promotion", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 23.0, "series": [{"data": [[0.0, 3.0], [600.0, 12.0], [300.0, 10.0], [700.0, 3.0], [100.0, 23.0], [400.0, 12.0], [200.0, 9.0], [500.0, 10.0]], "isOverall": false, "label": "List promotion", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 54.0, "series": [{"data": [[0.0, 54.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.76957664E12, "maxY": 3.0, "series": [{"data": [[1.76957664E12, 3.0]], "isOverall": false, "label": "[Dev] List promotion", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76957664E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 370.6585365853659, "minX": 3.0, "maxY": 370.6585365853659, "series": [{"data": [[3.0, 370.6585365853659]], "isOverall": false, "label": "List promotion", "isController": false}, {"data": [[3.0, 370.6585365853659]], "isOverall": false, "label": "List promotion-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1468.0833333333333, "minX": 1.76957664E12, "maxY": 28851.166666666668, "series": [{"data": [[1.76957664E12, 28851.166666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76957664E12, 1468.0833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76957664E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 370.6585365853659, "minX": 1.76957664E12, "maxY": 370.6585365853659, "series": [{"data": [[1.76957664E12, 370.6585365853659]], "isOverall": false, "label": "List promotion", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76957664E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 351.0365853658536, "minX": 1.76957664E12, "maxY": 351.0365853658536, "series": [{"data": [[1.76957664E12, 351.0365853658536]], "isOverall": false, "label": "List promotion", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76957664E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.3658536585365855, "minX": 1.76957664E12, "maxY": 1.3658536585365855, "series": [{"data": [[1.76957664E12, 1.3658536585365855]], "isOverall": false, "label": "List promotion", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76957664E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 85.0, "minX": 1.76957664E12, "maxY": 796.0, "series": [{"data": [[1.76957664E12, 796.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76957664E12, 655.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76957664E12, 796.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76957664E12, 691.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76957664E12, 85.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76957664E12, 349.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76957664E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 160.0, "minX": 2.0, "maxY": 622.0, "series": [{"data": [[2.0, 590.5], [8.0, 290.5], [9.0, 419.0], [6.0, 622.0], [12.0, 318.0], [7.0, 376.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 160.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 2.0, "maxY": 577.0, "series": [{"data": [[2.0, 577.0], [8.0, 278.0], [9.0, 337.0], [6.0, 570.0], [12.0, 308.5], [7.0, 342.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.3666666666666667, "minX": 1.76957664E12, "maxY": 1.3666666666666667, "series": [{"data": [[1.76957664E12, 1.3666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76957664E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.76957664E12, "maxY": 1.3166666666666667, "series": [{"data": [[1.76957664E12, 1.3166666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76957664E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76957664E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.76957664E12, "maxY": 1.3166666666666667, "series": [{"data": [[1.76957664E12, 1.3166666666666667]], "isOverall": false, "label": "List promotion-success", "isController": false}, {"data": [[1.76957664E12, 0.05]], "isOverall": false, "label": "List promotion-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76957664E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.76957664E12, "maxY": 1.3166666666666667, "series": [{"data": [[1.76957664E12, 1.3166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76957664E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76957664E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

