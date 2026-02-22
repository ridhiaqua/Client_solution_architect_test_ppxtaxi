import { Navigation } from '../components/Navigation';
import { useState } from 'react';
import { Plane, MapPin, Clock, User, Calendar, Car, CheckCircle, ArrowRight, Wifi, Coffee, Utensils } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

export function PriorityPassApp() {
  const [selectedView, setSelectedView] = useState<'home' | 'journey' | 'lounge'>('home');
  const [taxiBooked, setTaxiBooked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Priority Pass App - Interactive Prototype</h1>
          <p className="text-lg text-gray-600">
            Experience the integrated journey from the Priority Pass perspective.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mobile Prototype */}
          <div>
            <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl max-w-sm mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden relative" style={{ height: '740px' }}>
                {/* Status Bar */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 flex items-center justify-between text-white text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-3 border border-white rounded-sm"></div>
                    <div className="w-2 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="h-full overflow-y-auto pb-20">
                  {selectedView === 'home' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h2 className="text-2xl font-bold">Good Morning</h2>
                          <p className="text-gray-600 text-sm">Sarah Anderson</p>
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>

                      {/* Upcoming Flight Card */}
                      <Card className="mb-4 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">Upcoming Flight</CardTitle>
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="text-2xl font-bold">JFK</div>
                              <div className="text-xs text-gray-600">New York</div>
                            </div>
                            <div className="flex-1 mx-4">
                              <div className="flex items-center justify-center">
                                <div className="h-px bg-gray-300 flex-1"></div>
                                <Plane className="w-4 h-4 mx-2 text-blue-600" />
                                <div className="h-px bg-gray-300 flex-1"></div>
                              </div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold">LHR</div>
                              <div className="text-xs text-gray-600">London</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>Feb 21, 2026</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>Departure: 3:30 PM</span>
                            </div>
                          </div>
                          <Button 
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            onClick={() => setSelectedView('journey')}
                          >
                            Plan Your Journey
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-2xl font-bold text-blue-600">12</div>
                            <div className="text-xs text-gray-600">Visits This Year</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="text-2xl font-bold text-purple-600">2,500+</div>
                            <div className="text-xs text-gray-600">Lounges Worldwide</div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Featured Benefit */}
                      <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Car className="w-5 h-5 text-purple-600" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold mb-1">New: Airport Transfer Integration</div>
                              <div className="text-xs text-gray-600 mb-2">
                                Book your taxi and we'll recommend the perfect departure time for lounge access.
                              </div>
                              <div className="text-xs text-purple-600 font-medium">Learn More →</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}

                  {selectedView === 'journey' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4"
                    >
                      <Button 
                        variant="ghost" 
                        className="mb-4 -ml-2"
                        onClick={() => setSelectedView('home')}
                      >
                        ← Back
                      </Button>

                      <h2 className="text-xl font-bold mb-2">Your Journey Plan</h2>
                      <p className="text-sm text-gray-600 mb-6">Optimized for comfort and timing</p>

                      {/* Timeline */}
                      <div className="relative">
                        {/* Home to Airport */}
                        <div className="flex gap-4 mb-8">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              1
                            </div>
                            <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                          </div>
                          <Card className="flex-1">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <div className="font-semibold">Departure from Home</div>
                                <Badge variant="outline" className="text-xs">12:30 PM</Badge>
                              </div>
                              <div className="text-xs text-gray-600 mb-3">
                                <MapPin className="w-3 h-3 inline mr-1" />
                                123 Main Street, Brooklyn, NY
                              </div>
                              {!taxiBooked ? (
                                <Button 
                                  size="sm" 
                                  className="w-full bg-purple-600 hover:bg-purple-700"
                                  onClick={() => setTaxiBooked(true)}
                                >
                                  <Car className="w-3 h-3 mr-1" />
                                  Book Taxi Now
                                </Button>
                              ) : (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-xs">
                                  <div className="flex items-center gap-2 text-green-700 font-medium mb-1">
                                    <CheckCircle className="w-3 h-3" />
                                    Taxi Confirmed
                                  </div>
                                  <div className="text-gray-600">
                                    Toyota Camry • Arrives at 12:25 PM
                                  </div>
                                  <div className="text-gray-600">
                                    Driver: Michael R. (4.9 ★)
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </div>

                        {/* Travel Time */}
                        <div className="flex gap-4 mb-8">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                              <Car className="w-4 h-4" />
                            </div>
                            <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                          </div>
                          <div className="flex-1 pt-2">
                            <div className="text-sm font-semibold mb-1">Travel to JFK Airport</div>
                            <div className="text-xs text-gray-600">45 min • 18.5 miles</div>
                            <div className="text-xs text-gray-500">Via I-278 E and I-678 S</div>
                          </div>
                        </div>

                        {/* Lounge */}
                        <div className="flex gap-4 mb-8">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              2
                            </div>
                            <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                          </div>
                          <Card className="flex-1">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <div className="font-semibold">Lounge Time</div>
                                <Badge variant="outline" className="text-xs">1:15 - 2:45 PM</Badge>
                              </div>
                              <div className="text-xs text-gray-600 mb-2">
                                Centurion Lounge - Terminal 4
                              </div>
                              <div className="flex gap-2 mb-3">
                                <Badge variant="secondary" className="text-xs">
                                  <Wifi className="w-3 h-3 mr-1" />
                                  WiFi
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  <Coffee className="w-3 h-3 mr-1" />
                                  Bar
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  <Utensils className="w-3 h-3 mr-1" />
                                  Dining
                                </Badge>
                              </div>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="w-full"
                                onClick={() => setSelectedView('lounge')}
                              >
                                View Lounge Details
                              </Button>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Gate */}
                        <div className="flex gap-4">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            3
                          </div>
                          <div className="flex-1 pt-2">
                            <div className="text-sm font-semibold mb-1">Boarding at Gate 42</div>
                            <div className="text-xs text-gray-600">Recommended arrival: 2:55 PM</div>
                            <div className="text-xs text-gray-500">10 min walk from lounge</div>
                          </div>
                        </div>
                      </div>

                      {/* Summary Card */}
                      <Card className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                        <CardContent className="p-4">
                          <div className="text-sm font-semibold mb-2">Journey Summary</div>
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div>
                              <div className="text-gray-600">Total Travel Time</div>
                              <div className="font-semibold">3 hours 15 min</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Lounge Time</div>
                              <div className="font-semibold">1 hour 30 min</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Buffer Time</div>
                              <div className="font-semibold">35 minutes</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Status</div>
                              <div className="font-semibold text-green-600">On Track ✓</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}

                  {selectedView === 'lounge' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4"
                    >
                      <Button 
                        variant="ghost" 
                        className="mb-4 -ml-2"
                        onClick={() => setSelectedView('journey')}
                      >
                        ← Back to Journey
                      </Button>

                      {/* Lounge Image */}
                      <div className="bg-gradient-to-br from-purple-300 to-blue-400 rounded-lg h-40 mb-4 flex items-center justify-center text-white">
                        <Coffee className="w-16 h-16 opacity-50" />
                      </div>

                      <h2 className="text-xl font-bold mb-1">Centurion Lounge</h2>
                      <p className="text-sm text-gray-600 mb-4">Terminal 4 • JFK International Airport</p>

                      <div className="flex items-center gap-2 mb-6">
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Open Now</Badge>
                        <span className="text-xs text-gray-600">5:00 AM - 11:00 PM</span>
                      </div>

                      {/* Amenities */}
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Amenities</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-sm">
                            <Wifi className="w-4 h-4 text-blue-600" />
                            <span>High-Speed WiFi</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Coffee className="w-4 h-4 text-blue-600" />
                            <span>Premium Bar</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Utensils className="w-4 h-4 text-blue-600" />
                            <span>Full Dining</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            <span>Showers</span>
                          </div>
                        </div>
                      </div>

                      {/* Occupancy */}
                      <Card className="mb-4">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold">Current Occupancy</span>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Low
                            </Badge>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                          </div>
                          <p className="text-xs text-gray-600">35% capacity • Great time to visit!</p>
                        </CardContent>
                      </Card>

                      {/* Directions */}
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2 text-sm">Getting There</h3>
                          <p className="text-xs text-gray-600 mb-3">
                            After security, turn right and follow signs to Terminal 4. 
                            Lounge is located near Gate 40, second floor.
                          </p>
                          <Button size="sm" variant="outline" className="w-full">
                            <MapPin className="w-3 h-3 mr-1" />
                            Open in Maps
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around">
                  <div className="flex flex-col items-center gap-1 text-blue-600">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg"></div>
                    <span className="text-xs">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <div className="w-6 h-6 bg-gray-100 rounded-lg"></div>
                    <span className="text-xs">Lounges</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <div className="w-6 h-6 bg-gray-100 rounded-lg"></div>
                    <span className="text-xs">Trips</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <div className="w-6 h-6 bg-gray-100 rounded-lg"></div>
                    <span className="text-xs">Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Smart Timing Recommendations</div>
                    <p className="text-sm text-gray-600">
                      Algorithm calculates optimal departure time considering traffic, lounge availability, 
                      and recommended boarding time. Updates in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Car className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Integrated Taxi Booking</div>
                    <p className="text-sm text-gray-600">
                      Book your airport transfer directly from Priority Pass app. Inventory shared 
                      with taxi platform for seamless coordination.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Real-Time Lounge Status</div>
                    <p className="text-sm text-gray-600">
                      See current occupancy levels, amenities, and wait times. System suggests 
                      best time to visit based on your schedule.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Unified Journey View</div>
                    <p className="text-sm text-gray-600">
                      Complete visibility of your door-to-gate journey in one timeline. 
                      Includes buffer times and walking distances.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold mb-4">Integration Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Reduced Stress:</strong> Automated planning removes guesswork from airport journey
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Maximized Lounge Time:</strong> Intelligent scheduling ensures you have quality relaxation time
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Single Interface:</strong> No need to switch between multiple apps for planning
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong>Real-Time Updates:</strong> Notifications for traffic changes, lounge capacity, and flight status
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}