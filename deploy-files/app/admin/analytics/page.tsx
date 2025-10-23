'use client'

import { AdminLayout } from '@/components/AdminLayout'
import { useState } from 'react'

export default function Analytics() {
  const [analytics, setAnalytics] = useState({
    visitors: {
      today: 45,
      thisWeek: 234,
      thisMonth: 1234,
      total: 5678
    },
    pageViews: {
      today: 89,
      thisWeek: 456,
      thisMonth: 2345,
      total: 12345
    },
    topPages: [
      { page: '/', views: 1234, percentage: 35 },
      { page: '/music', views: 890, percentage: 25 },
      { page: '/mercantile', views: 567, percentage: 16 },
      { page: '/events', views: 345, percentage: 10 },
      { page: '/gallery', views: 234, percentage: 7 }
    ],
    traffic: {
      direct: 45,
      search: 30,
      social: 15,
      referral: 10
    },
    devices: {
      mobile: 65,
      desktop: 30,
      tablet: 5
    },
    countries: [
      { country: 'Australia', visitors: 1234, percentage: 45 },
      { country: 'United States', visitors: 567, percentage: 21 },
      { country: 'United Kingdom', visitors: 345, percentage: 13 },
      { country: 'Canada', visitors: 234, percentage: 9 },
      { country: 'New Zealand', visitors: 123, percentage: 5 }
    ]
  })

  const [dateRange, setDateRange] = useState('30days')

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="parchment-section max-w-4xl mx-auto">
          <h1 className="header-1 text-3xl sm:text-4xl lg:text-5xl mb-6">Analytics Dashboard</h1>
          <p className="body-text text-lg sm:text-xl mb-8">
            Track your website performance and visitor insights.
          </p>
        </div>

        {/* Date Range Selector */}
        <div className="parchment-section max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Time Period:</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 90 days</option>
              <option value="1year">Last year</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="parchment-section">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">👥</span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Total Visitors</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.visitors.total.toLocaleString()}</p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
          </div>

          <div className="parchment-section">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">📄</span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Page Views</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.pageViews.total.toLocaleString()}</p>
              <p className="text-sm text-green-600">+8% from last month</p>
            </div>
          </div>

          <div className="parchment-section">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">⏱️</span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Avg. Session</p>
              <p className="text-3xl font-bold text-gray-900">2:34</p>
              <p className="text-sm text-green-600">+15% from last month</p>
            </div>
          </div>

          <div className="parchment-section">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">📱</span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Mobile Users</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.devices.mobile}%</p>
              <p className="text-sm text-blue-600">Mobile-first design</p>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="parchment-section">
            <h2 className="header-2 text-xl mb-6">Top Pages</h2>
            <div className="space-y-4">
              {analytics.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold text-gray-500">#{index + 1}</span>
                    <div>
                      <p className="font-medium text-gray-900">{page.page}</p>
                      <p className="text-sm text-gray-500">{page.views.toLocaleString()} views</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{page.percentage}%</p>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${page.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="parchment-section">
            <h2 className="header-2 text-xl mb-6">Traffic Sources</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔗</span>
                  <span className="font-medium">Direct</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{analytics.traffic.direct}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔍</span>
                  <span className="font-medium">Search</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{analytics.traffic.search}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <span className="font-medium">Social</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{analytics.traffic.social}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌐</span>
                  <span className="font-medium">Referral</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{analytics.traffic.referral}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="parchment-section max-w-4xl mx-auto">
          <h2 className="header-2 text-xl mb-6">Top Countries</h2>
          <div className="space-y-4">
            {analytics.countries.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold text-gray-500">#{index + 1}</span>
                  <span className="font-medium text-gray-900">{country.country}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{country.visitors.toLocaleString()} visitors</span>
                  <span className="text-sm font-medium text-gray-900">{country.percentage}%</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}