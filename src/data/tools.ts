import type { Tool } from '@/types/tools'

export const tools: Tool[] = [
  {
    id: '408c0fae-3308-430b-99e6-4098b40e5904',
    name: 'ジオイド高の計算ツール',
    description: '国土地理院のジオイド高データを使用して、指定した緯度・経度のジオイド高を計算します。',
    url: '#',
    status: 'ready',
    icon: '🌐',
    categories: ['ジオイド高'],
  },
  {
    id: 'e4fbebd7-c2ca-4b8f-84c7-57f1fc6faa2e',
    name: 'Potree 点群ビューアー',
    description: 'オープンソースのPotreeを使用した点群データのオンラインビューアー。共有可能なリンクを生成できます。',
    url: '#',
    status: 'wip',
    icon: '📊',
    categories: ['点群', 'Potree', 'Potree Converter'],
  },
  {
    id: 'b6efe7b7-8dad-4dca-aba7-0c7ec2f8006d',
    name: 'CesiumJS 3D地図ビューアー',
    description: '3D地球儀上での建物モデルや地形データの可視化。PLATEAUなどの3D都市データに対応しています。',
    url: '#',
    status: 'planned',
    icon: '🗺️',
    categories: ['CesiumJS', 'PLATEAU', '3D Tiles'],
  },
  {
    id: '0bf299a6-9378-4d7b-b611-7af2ca075760',
    name: 'Mapbox GL JS 地図アニメーション',
    description: 'Mapbox GL JSとThree.jsを組み合わせたインタラクティブな地図表現。交通データのアニメーション表示などに活用。',
    url: '#',
    status: 'planned',
    icon: '🚌',
    categories: ['Mapbox GL JS', 'ThreeJS', 'GTFS', 'PLATEAU', 'MVT'],
  },
  {
    id: '0bf299a6-9378-4d7b-b611-7af2ca075760',
    name: 'GISデータ生成ガイド',
    description: 'PostGISとQGISを使った各種GISデータの生成方法を解説。ベクトルタイル、標高データなどの作成手順を紹介。',
    url: '#',
    status: 'planned',
    icon: '🛠️',
    categories: ['PostGIS', 'QGIS', 'GDAL', 'Tippecanoe'],
  }
]
