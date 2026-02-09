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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 8699.0, "series": [{"data": [[0.0, 27.0], [0.1, 27.0], [0.2, 28.0], [0.3, 28.0], [0.4, 47.0], [0.5, 47.0], [0.6, 47.0], [0.7, 52.0], [0.8, 53.0], [0.9, 53.0], [1.0, 57.0], [1.1, 57.0], [1.2, 58.0], [1.3, 58.0], [1.4, 58.0], [1.5, 58.0], [1.6, 59.0], [1.7, 59.0], [1.8, 59.0], [1.9, 59.0], [2.0, 60.0], [2.1, 60.0], [2.2, 60.0], [2.3, 60.0], [2.4, 60.0], [2.5, 60.0], [2.6, 67.0], [2.7, 67.0], [2.8, 67.0], [2.9, 68.0], [3.0, 68.0], [3.1, 71.0], [3.2, 71.0], [3.3, 71.0], [3.4, 71.0], [3.5, 73.0], [3.6, 73.0], [3.7, 76.0], [3.8, 76.0], [3.9, 77.0], [4.0, 77.0], [4.1, 78.0], [4.2, 78.0], [4.3, 80.0], [4.4, 80.0], [4.5, 83.0], [4.6, 83.0], [4.7, 85.0], [4.8, 85.0], [4.9, 87.0], [5.0, 87.0], [5.1, 88.0], [5.2, 88.0], [5.3, 88.0], [5.4, 88.0], [5.5, 89.0], [5.6, 89.0], [5.7, 91.0], [5.8, 91.0], [5.9, 91.0], [6.0, 91.0], [6.1, 92.0], [6.2, 92.0], [6.3, 92.0], [6.4, 92.0], [6.5, 92.0], [6.6, 92.0], [6.7, 94.0], [6.8, 94.0], [6.9, 97.0], [7.0, 97.0], [7.1, 98.0], [7.2, 98.0], [7.3, 98.0], [7.4, 98.0], [7.5, 99.0], [7.6, 99.0], [7.7, 101.0], [7.8, 101.0], [7.9, 102.0], [8.0, 102.0], [8.1, 103.0], [8.2, 103.0], [8.3, 103.0], [8.4, 103.0], [8.5, 104.0], [8.6, 104.0], [8.7, 106.0], [8.8, 106.0], [8.9, 108.0], [9.0, 108.0], [9.1, 109.0], [9.2, 109.0], [9.3, 110.0], [9.4, 111.0], [9.5, 111.0], [9.6, 111.0], [9.7, 111.0], [9.8, 114.0], [9.9, 114.0], [10.0, 117.0], [10.1, 117.0], [10.2, 117.0], [10.3, 117.0], [10.4, 117.0], [10.5, 117.0], [10.6, 117.0], [10.7, 117.0], [10.8, 118.0], [10.9, 118.0], [11.0, 118.0], [11.1, 118.0], [11.2, 118.0], [11.3, 118.0], [11.4, 119.0], [11.5, 119.0], [11.6, 121.0], [11.7, 121.0], [11.8, 123.0], [11.9, 123.0], [12.0, 123.0], [12.1, 123.0], [12.2, 125.0], [12.3, 125.0], [12.4, 126.0], [12.5, 126.0], [12.6, 126.0], [12.7, 126.0], [12.8, 127.0], [12.9, 127.0], [13.0, 128.0], [13.1, 128.0], [13.2, 129.0], [13.3, 129.0], [13.4, 132.0], [13.5, 132.0], [13.6, 133.0], [13.7, 133.0], [13.8, 136.0], [13.9, 136.0], [14.0, 137.0], [14.1, 137.0], [14.2, 137.0], [14.3, 137.0], [14.4, 138.0], [14.5, 138.0], [14.6, 140.0], [14.7, 140.0], [14.8, 140.0], [14.9, 140.0], [15.0, 141.0], [15.1, 141.0], [15.2, 141.0], [15.3, 141.0], [15.4, 144.0], [15.5, 144.0], [15.6, 146.0], [15.7, 146.0], [15.8, 147.0], [15.9, 147.0], [16.0, 148.0], [16.1, 148.0], [16.2, 151.0], [16.3, 151.0], [16.4, 152.0], [16.5, 152.0], [16.6, 155.0], [16.7, 155.0], [16.8, 156.0], [16.9, 156.0], [17.0, 157.0], [17.1, 157.0], [17.2, 159.0], [17.3, 159.0], [17.4, 159.0], [17.5, 159.0], [17.6, 159.0], [17.7, 159.0], [17.8, 159.0], [17.9, 159.0], [18.0, 160.0], [18.1, 160.0], [18.2, 160.0], [18.3, 160.0], [18.4, 162.0], [18.5, 162.0], [18.6, 165.0], [18.7, 165.0], [18.8, 166.0], [18.9, 166.0], [19.0, 171.0], [19.1, 171.0], [19.2, 173.0], [19.3, 173.0], [19.4, 176.0], [19.5, 176.0], [19.6, 176.0], [19.7, 176.0], [19.8, 178.0], [19.9, 178.0], [20.0, 180.0], [20.1, 180.0], [20.2, 181.0], [20.3, 181.0], [20.4, 181.0], [20.5, 181.0], [20.6, 181.0], [20.7, 181.0], [20.8, 182.0], [20.9, 182.0], [21.0, 183.0], [21.1, 183.0], [21.2, 184.0], [21.3, 184.0], [21.4, 188.0], [21.5, 188.0], [21.6, 189.0], [21.7, 189.0], [21.8, 190.0], [21.9, 190.0], [22.0, 192.0], [22.1, 192.0], [22.2, 196.0], [22.3, 196.0], [22.4, 196.0], [22.5, 196.0], [22.6, 197.0], [22.7, 197.0], [22.8, 199.0], [22.9, 199.0], [23.0, 200.0], [23.1, 200.0], [23.2, 200.0], [23.3, 200.0], [23.4, 203.0], [23.5, 203.0], [23.6, 213.0], [23.7, 213.0], [23.8, 215.0], [23.9, 215.0], [24.0, 217.0], [24.1, 217.0], [24.2, 221.0], [24.3, 221.0], [24.4, 221.0], [24.5, 221.0], [24.6, 223.0], [24.7, 223.0], [24.8, 229.0], [24.9, 229.0], [25.0, 229.0], [25.1, 229.0], [25.2, 231.0], [25.3, 231.0], [25.4, 233.0], [25.5, 233.0], [25.6, 237.0], [25.7, 237.0], [25.8, 238.0], [25.9, 238.0], [26.0, 246.0], [26.1, 246.0], [26.2, 251.0], [26.3, 251.0], [26.4, 252.0], [26.5, 252.0], [26.6, 253.0], [26.7, 253.0], [26.8, 255.0], [26.9, 255.0], [27.0, 263.0], [27.1, 263.0], [27.2, 269.0], [27.3, 269.0], [27.4, 272.0], [27.5, 272.0], [27.6, 278.0], [27.7, 278.0], [27.8, 289.0], [27.9, 289.0], [28.0, 290.0], [28.1, 290.0], [28.2, 290.0], [28.3, 290.0], [28.4, 301.0], [28.5, 301.0], [28.6, 305.0], [28.7, 305.0], [28.8, 341.0], [28.9, 341.0], [29.0, 341.0], [29.1, 341.0], [29.2, 341.0], [29.3, 341.0], [29.4, 344.0], [29.5, 344.0], [29.6, 365.0], [29.7, 365.0], [29.8, 375.0], [29.9, 375.0], [30.0, 375.0], [30.1, 375.0], [30.2, 388.0], [30.3, 388.0], [30.4, 389.0], [30.5, 389.0], [30.6, 391.0], [30.7, 391.0], [30.8, 392.0], [30.9, 392.0], [31.0, 396.0], [31.1, 396.0], [31.2, 397.0], [31.3, 397.0], [31.4, 401.0], [31.5, 401.0], [31.6, 402.0], [31.7, 402.0], [31.8, 409.0], [31.9, 409.0], [32.0, 440.0], [32.1, 440.0], [32.2, 441.0], [32.3, 441.0], [32.4, 450.0], [32.5, 450.0], [32.6, 464.0], [32.7, 464.0], [32.8, 466.0], [32.9, 466.0], [33.0, 466.0], [33.1, 466.0], [33.2, 466.0], [33.3, 466.0], [33.4, 469.0], [33.5, 469.0], [33.6, 472.0], [33.7, 472.0], [33.8, 473.0], [33.9, 473.0], [34.0, 473.0], [34.1, 473.0], [34.2, 474.0], [34.3, 474.0], [34.4, 487.0], [34.5, 487.0], [34.6, 488.0], [34.7, 488.0], [34.8, 496.0], [34.9, 496.0], [35.0, 499.0], [35.1, 499.0], [35.2, 499.0], [35.3, 499.0], [35.4, 500.0], [35.5, 500.0], [35.6, 500.0], [35.7, 500.0], [35.8, 501.0], [35.9, 501.0], [36.0, 502.0], [36.1, 502.0], [36.2, 502.0], [36.3, 502.0], [36.4, 515.0], [36.5, 515.0], [36.6, 516.0], [36.7, 516.0], [36.8, 520.0], [36.9, 520.0], [37.0, 531.0], [37.1, 531.0], [37.2, 537.0], [37.3, 537.0], [37.4, 537.0], [37.5, 537.0], [37.6, 547.0], [37.7, 547.0], [37.8, 555.0], [37.9, 555.0], [38.0, 556.0], [38.1, 556.0], [38.2, 563.0], [38.3, 563.0], [38.4, 570.0], [38.5, 570.0], [38.6, 570.0], [38.7, 570.0], [38.8, 576.0], [38.9, 576.0], [39.0, 586.0], [39.1, 586.0], [39.2, 586.0], [39.3, 586.0], [39.4, 587.0], [39.5, 587.0], [39.6, 614.0], [39.7, 614.0], [39.8, 624.0], [39.9, 624.0], [40.0, 626.0], [40.1, 626.0], [40.2, 659.0], [40.3, 659.0], [40.4, 659.0], [40.5, 665.0], [40.6, 665.0], [40.7, 668.0], [40.8, 668.0], [40.9, 670.0], [41.0, 670.0], [41.1, 672.0], [41.2, 672.0], [41.3, 685.0], [41.4, 685.0], [41.5, 687.0], [41.6, 687.0], [41.7, 688.0], [41.8, 688.0], [41.9, 690.0], [42.0, 690.0], [42.1, 693.0], [42.2, 693.0], [42.3, 694.0], [42.4, 694.0], [42.5, 695.0], [42.6, 695.0], [42.7, 696.0], [42.8, 696.0], [42.9, 715.0], [43.0, 715.0], [43.1, 717.0], [43.2, 717.0], [43.3, 723.0], [43.4, 723.0], [43.5, 725.0], [43.6, 725.0], [43.7, 728.0], [43.8, 728.0], [43.9, 729.0], [44.0, 729.0], [44.1, 751.0], [44.2, 751.0], [44.3, 758.0], [44.4, 758.0], [44.5, 759.0], [44.6, 759.0], [44.7, 765.0], [44.8, 765.0], [44.9, 784.0], [45.0, 784.0], [45.1, 791.0], [45.2, 791.0], [45.3, 796.0], [45.4, 796.0], [45.5, 796.0], [45.6, 796.0], [45.7, 805.0], [45.8, 805.0], [45.9, 819.0], [46.0, 819.0], [46.1, 853.0], [46.2, 853.0], [46.3, 881.0], [46.4, 881.0], [46.5, 885.0], [46.6, 885.0], [46.7, 891.0], [46.8, 891.0], [46.9, 902.0], [47.0, 902.0], [47.1, 905.0], [47.2, 905.0], [47.3, 907.0], [47.4, 907.0], [47.5, 925.0], [47.6, 925.0], [47.7, 927.0], [47.8, 927.0], [47.9, 936.0], [48.0, 936.0], [48.1, 953.0], [48.2, 953.0], [48.3, 962.0], [48.4, 962.0], [48.5, 963.0], [48.6, 963.0], [48.7, 973.0], [48.8, 973.0], [48.9, 979.0], [49.0, 979.0], [49.1, 1024.0], [49.2, 1024.0], [49.3, 1046.0], [49.4, 1046.0], [49.5, 1049.0], [49.6, 1049.0], [49.7, 1054.0], [49.8, 1054.0], [49.9, 1067.0], [50.0, 1067.0], [50.1, 1080.0], [50.2, 1080.0], [50.3, 1086.0], [50.4, 1086.0], [50.5, 1097.0], [50.6, 1097.0], [50.7, 1111.0], [50.8, 1111.0], [50.9, 1129.0], [51.0, 1129.0], [51.1, 1129.0], [51.2, 1129.0], [51.3, 1130.0], [51.4, 1130.0], [51.5, 1131.0], [51.6, 1131.0], [51.7, 1131.0], [51.8, 1131.0], [51.9, 1134.0], [52.0, 1134.0], [52.1, 1149.0], [52.2, 1149.0], [52.3, 1162.0], [52.4, 1162.0], [52.5, 1172.0], [52.6, 1172.0], [52.7, 1186.0], [52.8, 1186.0], [52.9, 1188.0], [53.0, 1188.0], [53.1, 1197.0], [53.2, 1197.0], [53.3, 1222.0], [53.4, 1222.0], [53.5, 1223.0], [53.6, 1223.0], [53.7, 1228.0], [53.8, 1228.0], [53.9, 1238.0], [54.0, 1238.0], [54.1, 1242.0], [54.2, 1242.0], [54.3, 1255.0], [54.4, 1255.0], [54.5, 1264.0], [54.6, 1264.0], [54.7, 1265.0], [54.8, 1265.0], [54.9, 1265.0], [55.0, 1265.0], [55.1, 1275.0], [55.2, 1275.0], [55.3, 1284.0], [55.4, 1284.0], [55.5, 1304.0], [55.6, 1304.0], [55.7, 1309.0], [55.8, 1309.0], [55.9, 1346.0], [56.0, 1346.0], [56.1, 1362.0], [56.2, 1362.0], [56.3, 1369.0], [56.4, 1369.0], [56.5, 1373.0], [56.6, 1373.0], [56.7, 1385.0], [56.8, 1385.0], [56.9, 1404.0], [57.0, 1404.0], [57.1, 1413.0], [57.2, 1413.0], [57.3, 1425.0], [57.4, 1425.0], [57.5, 1426.0], [57.6, 1426.0], [57.7, 1432.0], [57.8, 1432.0], [57.9, 1434.0], [58.0, 1434.0], [58.1, 1453.0], [58.2, 1453.0], [58.3, 1506.0], [58.4, 1506.0], [58.5, 1511.0], [58.6, 1511.0], [58.7, 1516.0], [58.8, 1516.0], [58.9, 1517.0], [59.0, 1517.0], [59.1, 1519.0], [59.2, 1519.0], [59.3, 1519.0], [59.4, 1519.0], [59.5, 1523.0], [59.6, 1523.0], [59.7, 1523.0], [59.8, 1523.0], [59.9, 1534.0], [60.0, 1534.0], [60.1, 1535.0], [60.2, 1535.0], [60.3, 1536.0], [60.4, 1536.0], [60.5, 1543.0], [60.6, 1543.0], [60.7, 1553.0], [60.8, 1553.0], [60.9, 1565.0], [61.0, 1565.0], [61.1, 1569.0], [61.2, 1569.0], [61.3, 1570.0], [61.4, 1570.0], [61.5, 1573.0], [61.6, 1573.0], [61.7, 1592.0], [61.8, 1592.0], [61.9, 1598.0], [62.0, 1598.0], [62.1, 1601.0], [62.2, 1601.0], [62.3, 1605.0], [62.4, 1605.0], [62.5, 1613.0], [62.6, 1613.0], [62.7, 1625.0], [62.8, 1625.0], [62.9, 1628.0], [63.0, 1628.0], [63.1, 1682.0], [63.2, 1682.0], [63.3, 1695.0], [63.4, 1695.0], [63.5, 1708.0], [63.6, 1708.0], [63.7, 1717.0], [63.8, 1717.0], [63.9, 1717.0], [64.0, 1717.0], [64.1, 1718.0], [64.2, 1718.0], [64.3, 1718.0], [64.4, 1718.0], [64.5, 1719.0], [64.6, 1719.0], [64.7, 1721.0], [64.8, 1721.0], [64.9, 1726.0], [65.0, 1726.0], [65.1, 1745.0], [65.2, 1745.0], [65.3, 1752.0], [65.4, 1752.0], [65.5, 1757.0], [65.6, 1757.0], [65.7, 1758.0], [65.8, 1758.0], [65.9, 1823.0], [66.0, 1823.0], [66.1, 1836.0], [66.2, 1836.0], [66.3, 1853.0], [66.4, 1853.0], [66.5, 1913.0], [66.6, 1913.0], [66.7, 2021.0], [66.8, 2021.0], [66.9, 2024.0], [67.0, 2024.0], [67.1, 2030.0], [67.2, 2030.0], [67.3, 2030.0], [67.4, 2030.0], [67.5, 2031.0], [67.6, 2031.0], [67.7, 2072.0], [67.8, 2072.0], [67.9, 2120.0], [68.0, 2120.0], [68.1, 2197.0], [68.2, 2197.0], [68.3, 2213.0], [68.4, 2213.0], [68.5, 2222.0], [68.6, 2222.0], [68.7, 2252.0], [68.8, 2252.0], [68.9, 2264.0], [69.0, 2264.0], [69.1, 2307.0], [69.2, 2307.0], [69.3, 2313.0], [69.4, 2313.0], [69.5, 2349.0], [69.6, 2349.0], [69.7, 2358.0], [69.8, 2358.0], [69.9, 2389.0], [70.0, 2389.0], [70.1, 2397.0], [70.2, 2397.0], [70.3, 2418.0], [70.4, 2418.0], [70.5, 2508.0], [70.6, 2508.0], [70.7, 2512.0], [70.8, 2512.0], [70.9, 2532.0], [71.0, 2532.0], [71.1, 2560.0], [71.2, 2560.0], [71.3, 2585.0], [71.4, 2585.0], [71.5, 2613.0], [71.6, 2613.0], [71.7, 2638.0], [71.8, 2638.0], [71.9, 2642.0], [72.0, 2642.0], [72.1, 2647.0], [72.2, 2647.0], [72.3, 2689.0], [72.4, 2689.0], [72.5, 2729.0], [72.6, 2729.0], [72.7, 2740.0], [72.8, 2740.0], [72.9, 2747.0], [73.0, 2747.0], [73.1, 2767.0], [73.2, 2767.0], [73.3, 2774.0], [73.4, 2774.0], [73.5, 2775.0], [73.6, 2775.0], [73.7, 2779.0], [73.8, 2779.0], [73.9, 2782.0], [74.0, 2782.0], [74.1, 2784.0], [74.2, 2784.0], [74.3, 2801.0], [74.4, 2801.0], [74.5, 2808.0], [74.6, 2808.0], [74.7, 2824.0], [74.8, 2824.0], [74.9, 2838.0], [75.0, 2838.0], [75.1, 2849.0], [75.2, 2849.0], [75.3, 2895.0], [75.4, 2895.0], [75.5, 2908.0], [75.6, 2908.0], [75.7, 2923.0], [75.8, 2923.0], [75.9, 2928.0], [76.0, 2928.0], [76.1, 2964.0], [76.2, 2964.0], [76.3, 2965.0], [76.4, 2965.0], [76.5, 2970.0], [76.6, 2970.0], [76.7, 2994.0], [76.8, 2994.0], [76.9, 3034.0], [77.0, 3034.0], [77.1, 3039.0], [77.2, 3039.0], [77.3, 3050.0], [77.4, 3050.0], [77.5, 3050.0], [77.6, 3050.0], [77.7, 3099.0], [77.8, 3099.0], [77.9, 3119.0], [78.0, 3119.0], [78.1, 3129.0], [78.2, 3129.0], [78.3, 3141.0], [78.4, 3141.0], [78.5, 3166.0], [78.6, 3166.0], [78.7, 3169.0], [78.8, 3169.0], [78.9, 3176.0], [79.0, 3176.0], [79.1, 3182.0], [79.2, 3182.0], [79.3, 3196.0], [79.4, 3196.0], [79.5, 3226.0], [79.6, 3226.0], [79.7, 3293.0], [79.8, 3293.0], [79.9, 3308.0], [80.0, 3308.0], [80.1, 3320.0], [80.2, 3320.0], [80.3, 3326.0], [80.4, 3326.0], [80.5, 3336.0], [80.6, 3336.0], [80.7, 3405.0], [80.8, 3405.0], [80.9, 3416.0], [81.0, 3416.0], [81.1, 3480.0], [81.2, 3480.0], [81.3, 3524.0], [81.4, 3524.0], [81.5, 3653.0], [81.6, 3653.0], [81.7, 3702.0], [81.8, 3702.0], [81.9, 3739.0], [82.0, 3739.0], [82.1, 3740.0], [82.2, 3740.0], [82.3, 3787.0], [82.4, 3787.0], [82.5, 3806.0], [82.6, 3806.0], [82.7, 3827.0], [82.8, 3827.0], [82.9, 3830.0], [83.0, 3830.0], [83.1, 3850.0], [83.2, 3850.0], [83.3, 3968.0], [83.4, 3968.0], [83.5, 4023.0], [83.6, 4023.0], [83.7, 4025.0], [83.8, 4025.0], [83.9, 4032.0], [84.0, 4032.0], [84.1, 4065.0], [84.2, 4065.0], [84.3, 4077.0], [84.4, 4077.0], [84.5, 4113.0], [84.6, 4113.0], [84.7, 4119.0], [84.8, 4119.0], [84.9, 4120.0], [85.0, 4120.0], [85.1, 4120.0], [85.2, 4120.0], [85.3, 4381.0], [85.4, 4381.0], [85.5, 4381.0], [85.6, 4381.0], [85.7, 4381.0], [85.8, 4381.0], [85.9, 4441.0], [86.0, 4441.0], [86.1, 4661.0], [86.2, 4661.0], [86.3, 4997.0], [86.4, 4997.0], [86.5, 5430.0], [86.6, 5430.0], [86.7, 5448.0], [86.8, 5448.0], [86.9, 5459.0], [87.0, 5459.0], [87.1, 5478.0], [87.2, 5478.0], [87.3, 5515.0], [87.4, 5515.0], [87.5, 5574.0], [87.6, 5574.0], [87.7, 5707.0], [87.8, 5707.0], [87.9, 5843.0], [88.0, 5843.0], [88.1, 5848.0], [88.2, 5848.0], [88.3, 5993.0], [88.4, 5993.0], [88.5, 6003.0], [88.6, 6003.0], [88.7, 6003.0], [88.8, 6003.0], [88.9, 6006.0], [89.0, 6006.0], [89.1, 6008.0], [89.2, 6008.0], [89.3, 6012.0], [89.4, 6012.0], [89.5, 6050.0], [89.6, 6050.0], [89.7, 6051.0], [89.8, 6051.0], [89.9, 6052.0], [90.0, 6052.0], [90.1, 6057.0], [90.2, 6057.0], [90.3, 6058.0], [90.4, 6058.0], [90.5, 6059.0], [90.6, 6059.0], [90.7, 6070.0], [90.8, 6070.0], [90.9, 6122.0], [91.0, 6122.0], [91.1, 6478.0], [91.2, 6478.0], [91.3, 6491.0], [91.4, 6491.0], [91.5, 6633.0], [91.6, 6633.0], [91.7, 6634.0], [91.8, 6634.0], [91.9, 6647.0], [92.0, 6647.0], [92.1, 6654.0], [92.2, 6654.0], [92.3, 6655.0], [92.4, 6655.0], [92.5, 6674.0], [92.6, 6674.0], [92.7, 6709.0], [92.8, 6709.0], [92.9, 6716.0], [93.0, 6716.0], [93.1, 6771.0], [93.2, 6771.0], [93.3, 6806.0], [93.4, 6806.0], [93.5, 6853.0], [93.6, 6853.0], [93.7, 6862.0], [93.8, 6862.0], [93.9, 6889.0], [94.0, 6889.0], [94.1, 6895.0], [94.2, 6895.0], [94.3, 6926.0], [94.4, 6926.0], [94.5, 6935.0], [94.6, 6935.0], [94.7, 6941.0], [94.8, 6941.0], [94.9, 6948.0], [95.0, 6948.0], [95.1, 7041.0], [95.2, 7041.0], [95.3, 7049.0], [95.4, 7049.0], [95.5, 7053.0], [95.6, 7053.0], [95.7, 7127.0], [95.8, 7127.0], [95.9, 7143.0], [96.0, 7143.0], [96.1, 7182.0], [96.2, 7182.0], [96.3, 7215.0], [96.4, 7215.0], [96.5, 7229.0], [96.6, 7229.0], [96.7, 7306.0], [96.8, 7306.0], [96.9, 7312.0], [97.0, 7312.0], [97.1, 7342.0], [97.2, 7342.0], [97.3, 7396.0], [97.4, 7396.0], [97.5, 7428.0], [97.6, 7428.0], [97.7, 7435.0], [97.8, 7435.0], [97.9, 7529.0], [98.0, 7529.0], [98.1, 7616.0], [98.2, 7616.0], [98.3, 7735.0], [98.4, 7735.0], [98.5, 7761.0], [98.6, 7761.0], [98.7, 7834.0], [98.8, 7834.0], [98.9, 8053.0], [99.0, 8053.0], [99.1, 8102.0], [99.2, 8102.0], [99.3, 8126.0], [99.4, 8126.0], [99.5, 8158.0], [99.6, 8158.0], [99.7, 8280.0], [99.8, 8280.0], [99.9, 8699.0], [100.0, 8699.0]], "isOverall": false, "label": "[UAT] list promotion ", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 77.0, "series": [{"data": [[0.0, 38.0], [600.0, 16.0], [700.0, 14.0], [800.0, 6.0], [900.0, 11.0], [1000.0, 8.0], [1100.0, 13.0], [1200.0, 11.0], [1300.0, 7.0], [1400.0, 7.0], [1500.0, 19.0], [1600.0, 7.0], [1700.0, 12.0], [1800.0, 3.0], [1900.0, 1.0], [2000.0, 6.0], [2100.0, 2.0], [2200.0, 4.0], [2300.0, 6.0], [2400.0, 1.0], [2500.0, 5.0], [2600.0, 5.0], [2700.0, 9.0], [2800.0, 6.0], [2900.0, 7.0], [3000.0, 5.0], [3100.0, 8.0], [3300.0, 4.0], [3200.0, 2.0], [3400.0, 3.0], [3500.0, 1.0], [3700.0, 4.0], [3600.0, 1.0], [3800.0, 4.0], [3900.0, 1.0], [4000.0, 5.0], [4100.0, 4.0], [4300.0, 3.0], [4600.0, 1.0], [4400.0, 1.0], [4900.0, 1.0], [5500.0, 2.0], [5400.0, 4.0], [5800.0, 2.0], [5700.0, 1.0], [6000.0, 12.0], [6100.0, 1.0], [5900.0, 1.0], [6600.0, 6.0], [6400.0, 2.0], [6800.0, 5.0], [6900.0, 4.0], [6700.0, 3.0], [7100.0, 3.0], [7000.0, 3.0], [7400.0, 2.0], [7300.0, 4.0], [7200.0, 2.0], [7600.0, 1.0], [7500.0, 1.0], [7700.0, 2.0], [7800.0, 1.0], [8100.0, 3.0], [8000.0, 1.0], [8600.0, 1.0], [8200.0, 1.0], [100.0, 77.0], [200.0, 27.0], [300.0, 15.0], [400.0, 20.0], [500.0, 21.0]], "isOverall": false, "label": "[UAT] list promotion ", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 62.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 178.0, "series": [{"data": [[0.0, 164.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 96.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 178.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 62.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 41.96399999999996, "minX": 1.77060648E12, "maxY": 41.96399999999996, "series": [{"data": [[1.77060648E12, 41.96399999999996]], "isOverall": false, "label": "[UAT] List promotion", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77060648E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 71.0, "minX": 1.0, "maxY": 5205.428571428572, "series": [{"data": [[33.0, 1664.642857142857], [32.0, 77.0], [2.0, 84.0], [35.0, 712.5555555555555], [34.0, 459.0], [37.0, 594.8333333333334], [36.0, 5205.428571428572], [39.0, 256.5], [38.0, 2213.0], [41.0, 636.0], [40.0, 692.0], [43.0, 163.66666666666666], [42.0, 539.75], [45.0, 897.75], [44.0, 1906.25], [47.0, 2765.666666666667], [46.0, 2768.3846153846152], [49.0, 1085.5555555555557], [48.0, 2211.0000000000005], [50.0, 2309.7518796992463], [4.0, 529.6666666666666], [5.0, 290.0], [7.0, 500.6666666666667], [8.0, 73.0], [9.0, 71.0], [10.0, 210.0], [11.0, 759.0], [12.0, 299.75], [13.0, 132.5], [14.0, 136.0], [15.0, 126.0], [16.0, 1097.0], [1.0, 208.66666666666666], [17.0, 1093.0], [18.0, 1151.0], [21.0, 1383.0], [23.0, 1395.875], [24.0, 421.3333333333333], [25.0, 188.0], [26.0, 2504.6666666666665], [27.0, 524.1428571428571], [30.0, 1284.7222222222222], [31.0, 1349.25]], "isOverall": false, "label": "[UAT] list promotion ", "isController": false}, {"data": [[41.96399999999996, 1949.000000000001]], "isOverall": false, "label": "[UAT] list promotion -Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 18258.333333333332, "minX": 1.77060648E12, "maxY": 109563.53333333334, "series": [{"data": [[1.77060648E12, 109563.53333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77060648E12, 18258.333333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77060648E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1949.000000000001, "minX": 1.77060648E12, "maxY": 1949.000000000001, "series": [{"data": [[1.77060648E12, 1949.000000000001]], "isOverall": false, "label": "[UAT] list promotion ", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77060648E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1948.9520000000011, "minX": 1.77060648E12, "maxY": 1948.9520000000011, "series": [{"data": [[1.77060648E12, 1948.9520000000011]], "isOverall": false, "label": "[UAT] list promotion ", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77060648E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 21.24400000000003, "minX": 1.77060648E12, "maxY": 21.24400000000003, "series": [{"data": [[1.77060648E12, 21.24400000000003]], "isOverall": false, "label": "[UAT] list promotion ", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77060648E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.77060648E12, "maxY": 8699.0, "series": [{"data": [[1.77060648E12, 8699.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77060648E12, 6505.2000000000035]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77060648E12, 8116.64]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77060648E12, 7127.799999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77060648E12, 47.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77060648E12, 944.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77060648E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 27.5, "minX": 2.0, "maxY": 6484.5, "series": [{"data": [[33.0, 2213.0], [8.0, 742.0], [32.0, 501.0], [2.0, 197.5], [41.0, 3787.0], [46.0, 2618.5], [47.0, 1275.0], [12.0, 164.0], [15.0, 497.5], [63.0, 694.0], [19.0, 401.5], [5.0, 1553.0], [21.0, 1045.5], [22.0, 1130.5], [23.0, 5515.0], [24.0, 6484.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 466.0], [22.0, 27.5], [63.0, 1603.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 27.5, "minX": 2.0, "maxY": 6484.5, "series": [{"data": [[33.0, 2213.0], [8.0, 742.0], [32.0, 501.0], [2.0, 197.5], [41.0, 3787.0], [46.0, 2618.5], [47.0, 1275.0], [12.0, 163.5], [15.0, 497.5], [63.0, 694.0], [19.0, 401.5], [5.0, 1553.0], [21.0, 1045.5], [22.0, 1130.5], [23.0, 5515.0], [24.0, 6484.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 466.0], [22.0, 27.5], [63.0, 1603.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.77060648E12, "maxY": 8.333333333333334, "series": [{"data": [[1.77060648E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77060648E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.77060648E12, "maxY": 7.3, "series": [{"data": [[1.77060648E12, 7.3]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.77060648E12, 1.0333333333333334]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77060648E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.77060648E12, "maxY": 7.3, "series": [{"data": [[1.77060648E12, 7.3]], "isOverall": false, "label": "[UAT] list promotion -success", "isController": false}, {"data": [[1.77060648E12, 1.0333333333333334]], "isOverall": false, "label": "[UAT] list promotion -failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77060648E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.77060648E12, "maxY": 7.3, "series": [{"data": [[1.77060648E12, 7.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77060648E12, 1.0333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77060648E12, "title": "Total Transactions Per Second"}},
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

