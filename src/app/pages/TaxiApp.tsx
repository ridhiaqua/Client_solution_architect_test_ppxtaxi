import { Navigation } from '../components/Navigation';
import { useState } from 'react';
import { Car, MapPin, Clock, User, DollarSign, Star, Coffee, Plane, ArrowRight, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

export function TaxiApp() {
  const [selectedView, setSelectedView] = useState<'booking' | 'route' | 'lounge'>('booking');
  const [loungeAdded, setLoungeAdded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Taxi App - Interactive Prototype</h1>
          <p className="text-lg text-gray-600">
            See how taxi users discover and utilize Priority Pass lounges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mobile Prototype */}
          <div>
            <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl max-w-sm mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden relative" style={{ height: '740px' }}>
                {/* Status Bar */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-3 flex items-center justify-between text-white text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-3 border border-white rounded-sm"></div>
                    <div className="w-2 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="h-full overflow-y-auto pb-20">
                  {selectedView === 'booking' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h2 className="text-2xl font-bold">Book a Ride</h2>
                          <p className="text-gray-600 text-sm">Where are you going?</p>
                        </div>
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>

                      {/* Location Cards */}
                      <Card className="mb-3">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div className="flex-1">
                              <div className="text-xs text-gray-500 mb-1">Pickup</div>
                              <div className="font-medium">123 Main Street, Brooklyn</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="mb-6">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="flex-1">
                              <div className="text-xs text-gray-500 mb-1">Destination</div>
                              <div className="font-medium">JFK International Airport</div>
                            </div>
                            <Plane className="w-4 h-4 text-gray-400" />
                          </div>
                        </CardContent>
                      </Card>

                      {/* Airport Perk Notice */}
                      <Card className="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Coffee className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold mb-1 text-sm">Airport Lounge Access Available!</div>
                              <p className="text-xs text-gray-600 mb-3">
                                We've partnered with Priority Pass to offer exclusive lounge access. 
                                Relax before your flight with complimentary food & drinks.
                              </p>
                              <Button 
                                size="sm" 
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                onClick={() => setSelectedView('lounge')}
                              >
                                Explore Lounges
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Time Selection */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold mb-3">When do you need the ride?</div>
                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" className="justify-start">
                            <Clock className="w-4 h-4 mr-2" />
                            Now
                          </Button>
                          <Button variant="outline" className="justify-start bg-purple-50 border-purple-300 text-purple-700">
                            <Clock className="w-4 h-4 mr-2" />
                            Schedule
                          </Button>
                        </div>
                      </div>

                      {/* Recommended Time */}
                      <Card className="mb-6 border-green-200 bg-green-50">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-semibold text-green-700">Smart Recommendation</span>
                          </div>
                          <p className="text-sm mb-2">Based on your flight at 3:30 PM:</p>
                          <div className="text-lg font-bold text-gray-900 mb-1">Pickup at 12:30 PM</div>
                          <p className="text-xs text-gray-600">
                            Allows 90 minutes at lounge + 30 min buffer
                          </p>
                        </CardContent>
                      </Card>

                      {/* Vehicle Options */}
                      <div className="mb-4">
                        <div className="text-sm font-semibold mb-3">Choose a ride</div>
                        <div className="space-y-2">
                          <Card className="border-purple-300 bg-purple-50">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Car className="w-8 h-8 text-purple-600" />
                                  <div>
                                    <div className="font-semibold">Standard</div>
                                    <div className="text-xs text-gray-600">4 passengers • 3 min away</div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold">$45</div>
                                  <div className="flex items-center gap-1 text-xs">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span>4.9</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Car className="w-8 h-8 text-gray-600" />
                                  <div>
                                    <div className="font-semibold">Premium</div>
                                    <div className="text-xs text-gray-600">4 passengers • 5 min away</div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="font-bold">$68</div>
                                  <div className="flex items-center gap-1 text-xs">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span>5.0</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700 h-12"
                        onClick={() => setSelectedView('route')}
                      >
                        Confirm Booking
                      </Button>
                    </motion.div>
                  )}

                  {selectedView === 'route' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4"
                    >
                      <Button 
                        variant="ghost" 
                        className="mb-4 -ml-2"
                        onClick={() => setSelectedView('booking')}
                      >
                        ← Back
                      </Button>

                      <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-lg h-48 mb-4 flex items-center justify-center relative overflow-hidden">
                        <MapPin className="w-12 h-12 text-gray-600 opacity-50" />
                        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-3 py-2 text-xs">
                          <div className="font-semibold">45 min</div>
                          <div className="text-gray-600">18.5 miles</div>
                        </div>
                      </div>

                      <Card className="mb-4">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">Michael Rodriguez</div>
                              <div className="text-xs text-gray-600">Toyota Camry • ABC-1234</div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">4.9</span>
                            </div>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                            <div className="text-sm font-semibold text-green-700 mb-1">Driver arriving in 3 minutes</div>
                            <div className="text-xs text-gray-600">Scheduled pickup: 12:30 PM</div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Lounge Stop Suggestion */}
                      {!loungeAdded ? (
                        <Card className="mb-4 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Coffee className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold mb-1">Add Lounge to Journey?</div>
                                <p className="text-xs text-gray-600 mb-3">
                                  The Centurion Lounge is on your route. Add it to your journey and enjoy 
                                  complimentary amenities before your flight.
                                </p>
                                <div className="flex gap-2">
                                  <Button 
                                    size="sm" 
                                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                                    onClick={() => setLoungeAdded(true)}
                                  >
                                    Add to Trip
                                  </Button>
                                  <Button size="sm" variant="outline" className="flex-1">
                                    No Thanks
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ) : (
                        <Card className="mb-4 border-green-200 bg-green-50">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Coffee className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold mb-1 text-green-700">Lounge Added!</div>
                                <p className="text-xs text-gray-600 mb-2">
                                  Centurion Lounge • Terminal 4
                                </p>
                                <div className="text-xs space-y-1">
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Arrival at lounge:</span>
                                    <span className="font-semibold">1:15 PM</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Recommended stay:</span>
                                    <span className="font-semibold">90 minutes</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Trip Details */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Trip Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                              <MapPin className="w-4 h-4 text-green-600" />
                              <div className="flex-1">
                                <div className="text-xs text-gray-500">Pickup</div>
                                <div>123 Main Street, Brooklyn</div>
                              </div>
                            </div>
                            {loungeAdded && (
                              <div className="flex items-center gap-3">
                                <Coffee className="w-4 h-4 text-blue-600" />
                                <div className="flex-1">
                                  <div className="text-xs text-gray-500">Stop</div>
                                  <div>Centurion Lounge, Terminal 4</div>
                                </div>
                              </div>
                            )}
                            <div className="flex items-center gap-3">
                              <Plane className="w-4 h-4 text-red-600" />
                              <div className="flex-1">
                                <div className="text-xs text-gray-500">Destination</div>
                                <div>JFK International Airport</div>
                              </div>
                            </div>
                            <div className="border-t pt-3 flex items-center justify-between">
                              <span className="text-gray-600">Total Fare</span>
                              <span className="text-lg font-bold">$45.00</span>
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
                        onClick={() => setSelectedView('booking')}
                      >
                        ← Back to Booking
                      </Button>

                      <h2 className="text-xl font-bold mb-2">Airport Lounge Access</h2>
                      <p className="text-sm text-gray-600 mb-6">
                        Powered by Priority Pass
                      </p>

                      {/* Available Lounges */}
                      <div className="space-y-3 mb-6">
                        <Card className="border-blue-200">
                          <CardContent className="p-4">
                            <div className="flex gap-3">
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Coffee className="w-8 h-8 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold mb-1">Centurion Lounge</div>
                                <div className="text-xs text-gray-600 mb-2">Terminal 4</div>
                                <div className="flex flex-wrap gap-1 mb-2">
                                  <Badge variant="secondary" className="text-xs">WiFi</Badge>
                                  <Badge variant="secondary" className="text-xs">Food</Badge>
                                  <Badge variant="secondary" className="text-xs">Bar</Badge>
                                  <Badge variant="secondary" className="text-xs">Showers</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                                    Low Occupancy
                                  </Badge>
                                  <span className="text-xs text-gray-500">On your route</span>
                                </div>
                              </div>
                            </div>
                            <Button 
                              size="sm" 
                              className="w-full mt-3 bg-blue-600 hover:bg-blue-700"
                              onClick={() => {
                                setLoungeAdded(true);
                                setSelectedView('booking');
                              }}
                            >
                              Add to Journey
                            </Button>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <div className="flex gap-3">
                              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Coffee className="w-8 h-8 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold mb-1">Delta Sky Club</div>
                                <div className="text-xs text-gray-600 mb-2">Terminal 2</div>
                                <div className="flex flex-wrap gap-1 mb-2">
                                  <Badge variant="secondary" className="text-xs">WiFi</Badge>
                                  <Badge variant="secondary" className="text-xs">Food</Badge>
                                  <Badge variant="secondary" className="text-xs">Bar</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 text-xs">
                                    Moderate
                                  </Badge>
                                  <span className="text-xs text-gray-500">12 min detour</span>
                                </div>
                              </div>
                            </div>
                            <Button size="sm" variant="outline" className="w-full mt-3">
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Info Card */}
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm">
                              <div className="font-semibold mb-1">How it works</div>
                              <p className="text-xs text-gray-600 mb-2">
                                We've partnered with Priority Pass to offer you exclusive lounge access. 
                                Your driver will wait while you relax.
                              </p>
                              <div className="text-xs text-blue-600 font-medium">Learn more →</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around">
                  <div className="flex flex-col items-center gap-1 text-purple-600">
                    <div className="w-6 h-6 bg-purple-100 rounded-lg"></div>
                    <span className="text-xs">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <div className="w-6 h-6 bg-gray-100 rounded-lg"></div>
                    <span className="text-xs">Activity</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <div className="w-6 h-6 bg-gray-100 rounded-lg"></div>
                    <span className="text-xs">Payment</span>
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
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Lounge Discovery</div>
                    <p className="text-sm text-gray-600">
                      Automatic detection when booking airport rides. System surfaces relevant 
                      Priority Pass lounges with real-time availability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Smart Time Calculation</div>
                    <p className="text-sm text-gray-600">
                      Algorithm considers flight time, security wait, and recommended lounge 
                      duration to suggest optimal pickup time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Route Optimization</div>
                    <p className="text-sm text-gray-600">
                      Lounges on or near the route are prioritized. Shows detour time if 
                      lounge is off the direct path.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">No Additional Cost</div>
                    <p className="text-sm text-gray-600">
                      Adding a lounge stop doesn't increase fare. Driver compensation is 
                      handled through partnership agreement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold mb-4">Value for Taxi Users</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div className="text-sm">
                    <strong>Enhanced Experience:</strong> Transforms basic airport ride into premium journey
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div className="text-sm">
                    <strong>Discovery:</strong> Users learn about lounge benefits they may not have known about
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div className="text-sm">
                    <strong>Convenience:</strong> Single booking flow handles both transportation and lounge
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div className="text-sm">
                    <strong>Upsell Opportunity:</strong> Path to Priority Pass membership conversion
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