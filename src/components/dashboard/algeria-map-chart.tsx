"use client";

import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const AlgeriaMapChart = () => {
  const [geoLoaded, setGeoLoaded] = useState(false);
  const registeredRef = useRef(false);

  useEffect(() => {
    const load = async () => {
      try {
        let geo: any | null = null;
        try {
          const cached = sessionStorage.getItem('wilayasGeo');
          if (cached) geo = JSON.parse(cached);
        } catch (e) {
        }

        if (!geo) {
          const res = await fetch('/api/wilayas');
          if (!res.ok) throw new Error('Failed to fetch geojson');
          geo = await res.json();
          try {
            sessionStorage.setItem('wilayasGeo', JSON.stringify(geo));
          } catch (e) {
          }
        }

        if (!registeredRef.current && geo) {
          echarts.registerMap('DZ', geo as any);
          registeredRef.current = true;
        }
        setGeoLoaded(true);
      } catch (e) {
        console.error('Could not load geojson', e);
      }
    };

    load();
  }, []);

  if (!geoLoaded) {
    return <div style={{height: '100%', width: '100%'}} />;
  }

  const AlgeriaMapChartInner = () => {
  const data = [
    { name: 'Adrar', value: [ -0.29, 27.87, 10 ] },
    { name: 'Chlef', value: [ 1.33, 36.16, 80 ] },
    { name: 'Tamanrasset', value: [ 5.52, 22.78, 5 ] },
    { name: 'Oum El Bouaghi', value: [ 7.11, 35.87, 20 ] },
    { name: 'Batna', value: [ 6.17, 35.55, 30 ] },
    { name: 'Béjaïa', value: [ 5.06, 36.75, 90 ] },
    { name: 'Biskra', value: [ 5.73, 34.85, 15 ] },
    { name: 'Béchar', value: [ -2.22, 31.62, 10 ] },
    { name: 'Blida', value: [ 2.83, 36.47, 70 ] },
    { name: 'Bouira', value: [ 3.9, 36.37, 40 ] },
    { name: 'Tébessa', value: [ 8.12, 35.4, 25 ] },
    { name: 'Tlemcen', value: [ -1.32, 34.88, 85 ] },
    { name: 'Tiaret', value: [ 1.32, 35.37, 20 ] },
    { name: 'Tizi Ouzou', value: [ 4.05, 36.72, 95 ] },
    { name: 'Algiers', value: [ 3.06, 36.78, 100 ] },
    { name: 'Djelfa', value: [ 3.25, 34.67, 15 ] },
    { name: 'Jijel', value: [ 5.77, 36.82, 50 ] },
    { name: 'Sétif', value: [ 5.4, 36.19, 60 ] },
    { name: 'Saïda', value: [ 0.15, 34.83, 10 ] },
    { name: 'Skikda', value: [ 6.9, 36.88, 75 ] },
    { name: 'Sidi Bel Abbès', value: [ -0.63, 35.19, 35 ] },
    { name: 'Annaba', value: [ 7.76, 36.9, 80 ] },
    { name: 'Guelma', value: [ 7.43, 36.46, 45 ] },
    { name: 'Constantine', value: [ 6.62, 36.36, 90 ] },
    { name: 'Médéa', value: [ 2.75, 36.27, 25 ] },
    { name: 'Mostaganem', value: [ 0.09, 35.93, 55 ] },
    { name: 'M\'Sila', value: [ 4.54, 35.7, 20 ] },
    { name: 'Mascara', value: [ 0.14, 35.4, 30 ] },
    { name: 'Ouargla', value: [ 5.33, 31.95, 10 ] },
    { name: 'Oran', value: [ -0.64, 35.7, 100 ] },
    { name: 'El Bayadh', value: [ 1.02, 33.68, 5 ] },
    { name: 'Illizi', value: [ 8.47, 26.48, 5 ] },
    { name: 'Bordj Bou Arréridj', value: [ 4.77, 36.07, 35 ] },
    { name: 'Boumerdès', value: [ 3.48, 36.76, 65 ] },
    { name: 'El Tarf', value: [ 8.32, 36.77, 40 ] },
    { name: 'Tindouf', value: [ -8.13, 27.67, 5 ] },
    { name: 'Tissemsilt', value: [ 1.81, 35.6, 15 ] },
    { name: 'El Oued', value: [ 6.86, 33.36, 20 ] },
    { name: 'Khenchela', value: [ 7.14, 35.43, 25 ] },
    { name: 'Souk Ahras', value: [ 7.95, 36.29, 30 ] },
    { name: 'Tipaza', value: [ 2.45, 36.59, 50 ] },
    { name: 'Mila', value: [ 6.26, 36.45, 45 ] },
    { name: 'Aïn Defla', value: [ 1.96, 36.26, 35 ] },
    { name: 'Naâma', value: [ -0.31, 33.26, 10 ] },
    { name: 'Aïn Témouchent', value: [ -1.14, 35.3, 40 ] },
    { name: 'Ghardaïa', value: [ 3.67, 32.48, 15 ] },
    { name: 'Relizane', value: [ 0.55, 35.74, 30 ] }
  ];

  const option = {
    tooltip: {
      trigger: 'item',
    },
    geo: {
      map: 'DZ',
      roam: true,
      itemStyle: {
        areaColor: '#ffffff',
        borderColor: '#d1d5db',
        borderWidth: 1,
      },
      emphasis: {
        itemStyle: {
          areaColor: '#eef2ff',
        },
        label: {
          show: false,
        },
      },
    },
    series: [
      {
        name: 'Appointments',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: data.map(function (item) {
          return {
            name: item.name,
            value: [item.value[0], item.value[1], item.value[2]],
          };
        }),
        symbolSize: function (val: number[]) {
          return val[2] / 5;
        },
        encode: {
          value: 2,
        },
        itemStyle: {
          color: '#0078d4',
          opacity: 0.9,
        },
        emphasis: {
          label: {
            show: true,
            formatter: '{b}',
            position: 'top',
          },
        },
      },
    ],
    toolbox: {
      show: true,
      orient: 'vertical',
      right: 10,
      bottom: 20,
      feature: {
        myZoomIn: {
          show: true,
          title: 'Zoom In',
          icon: 'path://M11 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zM5.5 3v5m-2.5-2.5h5',
          onclick: function (ec: any, api: any) {
            api.dispatchAction({
              type: 'geoRoam',
              roamType: 'zoomIn'
            });
          }
        },
        myZoomOut: {
          show: true,
          title: 'Zoom Out',
          icon: 'path://M11 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zM3 5.5h5',
           onclick: function (ec: any, api: any) {
            api.dispatchAction({
              type: 'geoRoam',
              roamType: 'zoomOut'
            });
          }
        }
      },
      iconStyle: {
        borderColor: 'hsl(var(--border))',
      },
      itemSize: 24,
      itemGap: 12,
    },
  };

    return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />;
  };

  return <AlgeriaMapChartInner />;
};

export default AlgeriaMapChart;
