// import React, { useState, useEffect } from 'react';
// import { User, CreditCard, TrendingUp, Calendar, DollarSign, AlertTriangle, CheckCircle, Activity, Loader2 } from 'lucide-react';

// const GetAnalytics = (props) => {

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0
//     }).format(amount);
//   }; 

//   const ScoreCard = ({ title, score, maxScore = 850, color = "blue" }) => {
//     const percentage = (score / maxScore) * 100;
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-md border">
//         <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
//         <div className="flex items-center justify-between mb-3">
//           <span className="text-3xl font-bold text-gray-900">{score}</span>
//           <span className="text-sm text-gray-500">/ {maxScore}</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div 
//             className={`bg-${color}-500 h-2 rounded-full transition-all duration-300`}
//             style={{ width: `${percentage}%` }}
//           ></div>
//         </div>
//       </div>
//     );
//   };

//   const StatCard = ({ title, value, icon: Icon, color = "blue", subtitle = null }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md border">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-sm font-medium text-gray-500">{title}</p>
//           <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
//           {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
//         </div>
//         <div className={`p-3 bg-${color}-100 rounded-full`}>
//           <Icon className={`h-6 w-6 text-${color}-600`} />
//         </div>
//       </div>
//     </div>
//   );

//   // Loading Component
//   const LoadingSpinner = () => (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="text-center">
//         <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
//         <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Analytics</h2>
//         <p className="text-gray-600">Please wait while we fetch your financial data...</p>
//       </div>
//     </div>
//   );

//   // Error Component
//   const ErrorMessage = () => (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="text-center">
//         <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
//         <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Data</h2>
//         <p className="text-gray-600 mb-4">{props.error}</p>
//         <button 
//           onClick={() => window.location.reload()} 
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//         >
//           Retry
//         </button>
//       </div>
//     </div>
//   );

//   // Show loading spinner while data is being fetched
//   if (props.loading) {
//     return <LoadingSpinner />;
//   }

//   // Show error message if there's an error
//   if (props.error) {
//     return <ErrorMessage />;
//   }

//   // Show message if no data is available
//   if (!props.analyticsData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-900 mb-2">No Data Available</h2>
//           <p className="text-gray-600">No analytics data found for this request.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Analytics Dashboard</h1>
//           <p className="text-gray-600">Comprehensive analysis for {props.analyticsData.consumerName}</p>
//         </div>

//         {/* Customer Information */}
//         <div className="bg-white rounded-lg shadow-md border p-6 mb-8">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//             <User className="h-5 w-5 mr-2" />
//             Customer Information
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div>
//               <p className="text-sm font-medium text-gray-500">Name</p>
//               <p className="text-lg font-semibold text-gray-900">{props.analyticsData.consumerName}</p>
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-500">Date of Birth</p>
//               <p className="text-lg font-semibold text-gray-900">{props.analyticsData.dateOfBirth}</p>
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-500">Mobile Number</p>
//               <p className="text-lg font-semibold text-gray-900">{props.analyticsData.mobileNo}</p>
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-500">Primary Bank</p>
//               <p className="text-lg font-semibold text-gray-900">{props.analyticsData.primaryBankAccountName}</p>
//             </div>
//           </div>
//         </div>

//         {/* Credit Scores */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Credit Scores</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <ScoreCard 
//               title="Bureau Score" 
//               score={props.analyticsData.bureauScore} 
//               color="green"
//             />
//             <ScoreCard 
//               title="Combined Score" 
//               score={props.analyticsData.combinedScore} 
//               color="blue"
//             />
//             <ScoreCard 
//               title="Metis Bank Score" 
//               score={props.analyticsData.metisBankScore} 
//               color="purple"
//             />
//             <ScoreCard 
//               title="Metis Bureau Score" 
//               score={props.analyticsData.metisBureauScore} 
//               color="indigo"
//             />
//           </div>
//         </div>

//         {/* Key Financial Metrics */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Financial Metrics</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <StatCard 
//               title="Average Monthly Credits"
//               value={formatCurrency(props.analyticsData.averageMonthlyCredits)}
//               icon={TrendingUp}
//               color="green"
//             />
//             <StatCard 
//               title="Average Monthly Debits"
//               value={formatCurrency(props.analyticsData.averageMonthlyDebits)}
//               icon={TrendingUp}
//               color="red"
//             />
//             <StatCard 
//               title="Average ABB Balance"
//               value={formatCurrency(props.analyticsData.averageAbbBalance)}
//               icon={DollarSign}
//               color="blue"
//             />
//             <StatCard 
//               title="Existing EMI"
//               value={formatCurrency(props.analyticsData.existingEmi)}
//               icon={Calendar}
//               color="orange"
//               subtitle={props.analyticsData.dateOfEmi}
//             />
//           </div>
//         </div>

//         {/* Loan Information */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Loan Analysis</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow-md border">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Loan Details</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Loan Amount:</span>
//                   <span className="font-semibold">{formatCurrency(props.analyticsData.loan_amount)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Interest Rate:</span>
//                   <span className="font-semibold">{(props.analyticsData.interest_rate * 100)}%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Active Loans:</span>
//                   <span className="font-semibold">{props.analyticsData.activeLoanCount}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Shortest Tenure:</span>
//                   <span className="font-semibold">{props.analyticsData.shortestLoanTenure} months</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md border">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Capacity</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Max Loan Amount:</span>
//                   <span className="font-semibold text-green-600">{formatCurrency(props.analyticsData.maxLoanAmount)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Min Loan Amount:</span>
//                   <span className="font-semibold">{formatCurrency(props.analyticsData.minLoanAmount)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Max EMI:</span>
//                   <span className="font-semibold text-green-600">{formatCurrency(props.analyticsData.maxEmi)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Min EMI:</span>
//                   <span className="font-semibold">{formatCurrency(props.analyticsData.minEmi)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Duration Range:</span>
//                   <span className="font-semibold">{props.analyticsData.min_loan_duration} - {props.analyticsData.max_loan_duration} months</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Risk Assessment */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <StatCard 
//               title="Cheque Bounces"
//               value={props.analyticsData.chequeBounces}
//               icon={props.analyticsData.chequeBounces === 0 ? CheckCircle : AlertTriangle}
//               color={props.analyticsData.chequeBounces === 0 ? "green" : "red"}
//             />
//             <StatCard 
//               title="Credit Card Usage"
//               value={props.analyticsData.creditCardUsage}
//               icon={CreditCard}
//               color="blue"
//             />
//             <StatCard 
//               title="Enquiries (12 Months)"
//               value={props.analyticsData.enquiriesInLast12Months}
//               icon={Activity}
//               color={props.analyticsData.enquiriesInLast12Months === 0 ? "green" : "yellow"}
//             />
//           </div>
//         </div>

//         {/* Bank Statement Information */}
//         <div className="bg-white rounded-lg shadow-md border p-6">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Bank Statement Analysis</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <p className="text-sm font-medium text-gray-500">Account Number</p>
//               <p className="text-lg font-semibold text-gray-900">{props.analyticsData.bankAccountNumber}</p>
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-500">Statement Count</p>
//               <p className="text-lg font-semibold text-gray-900">{props.analyticsData.bankStatementCount} statement(s)</p>
//             </div>
//           </div>
          
//           {props.analyticsData.highestDpdInLast12Months === null && (
//             <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
//               <div className="flex items-center">
//                 <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                 <p className="text-green-800 font-medium">No Days Past Due (DPD) in the last 12 months</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetAnalytics;

//////////////////////// New Code //////////////////////////


import React, { useState, useEffect } from 'react';
import { User, CreditCard, TrendingUp, Calendar, IndianRupee, AlertTriangle, CheckCircle, Activity, Loader2, FileText, MessageSquare } from 'lucide-react';

const GetAnalytics = (props) => {

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }; 

  const getScoreColor = (score) => {
    if (score <= 400) return 'red';
    if (score <= 700) return 'yellow';
    return 'green';
  };

  const getScoreColorClass = (score) => {
    if (score <= 400) return 'text-red-600';
    if (score <= 700) return 'text-yellow-600';
    return 'text-green-600';
  };

  const ScoreGauge = ({ title, score, maxScore = 1000 }) => {
    const percentage = (score / maxScore) * 100;
    const color = getScoreColor(score);
    const radius = 45;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="bg-white p-6 rounded-lg shadow-md border text-center">
        <h3 className="text-sm font-medium text-gray-500 mb-4">{title}</h3>
        <div className="relative inline-flex items-center justify-center">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90"
          >
            <circle
              stroke="#e5e7eb"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke={color === 'red' ? '#ef4444' : color === 'yellow' ? '#eab308' : '#22c55e'}
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="transition-all duration-500 ease-in-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-2xl font-bold ${getScoreColorClass(score)}`}>{score}</div>
              <div className="text-xs text-gray-500">/{maxScore}</div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className={`inline-px px-2 py-1 rounded-full text-xs font-medium ${
            color === 'red' ? 'bg-red-100 text-red-800' : 
            color === 'yellow' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-green-100 text-green-800'
          }`}>
            {color === 'red' ? 'Poor' : color === 'yellow' ? 'Fair' : 'Good'}
          </div>
        </div>
      </div>
    );
  };

  const StatCard = ({ title, value, icon: Icon, color = "blue", subtitle = null }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 bg-${color}-100 rounded-full`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  // Loading Component
  const LoadingSpinner = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Analytics</h2>
        <p className="text-gray-600">Please wait while we fetch your financial data...</p>
      </div>
    </div>
  );

  // Error Component
  const ErrorMessage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Data</h2>
        <p className="text-gray-600 mb-4">{props.error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );

  // Show loading spinner while data is being fetched
  if (props.loading) {
    return <LoadingSpinner />;
  }

  // Show error message if there's an error
  if (props.error) {
    return <ErrorMessage />;
  }

  // Show message if no data is available
  if (!props.analyticsData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No Data Available</h2>
          <p className="text-gray-600">No analytics data found for this request.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive analysis for {props.analyticsData.consumerName}</p>
        </div>

        {/* 1. Bank Statement Analysis */}
        <div className="bg-white rounded-lg shadow-md border p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Bank Statement Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-500">Account Number</p>
              <p className="text-lg font-semibold text-gray-900">{props.analyticsData.bankAccountNumber}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Primary Bank</p>
              <p className="text-lg font-semibold text-gray-900">{props.analyticsData.primaryBankAccountName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Statement Count</p>
              <p className="text-lg font-semibold text-gray-900">{props.analyticsData.bankStatementCount} statement(s)</p>
            </div>
          </div>
          
          {props.analyticsData.highestDpdInLast12Months === null && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <p className="text-green-800 font-medium">No Days Past Due (DPD) in the last 12 months</p>
              </div>
            </div>
          )}
        </div>

        {/* 2. Customer Information */}
        <div className="bg-white rounded-lg shadow-md border p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <User className="h-5 w-5 mr-2" />
            Customer Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Name</p>
              <p className="text-lg font-semibold text-gray-900">{props.analyticsData.consumerName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Date of Birth</p>
              <p className="text-lg font-semibold text-gray-900">{props.analyticsData.dateOfBirth}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Mobile Number</p>
              <p className="text-lg font-semibold text-gray-900">{props.analyticsData.mobileNo}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="text-lg font-semibold text-gray-900">{props.analyticsData.email || 'Not provided'}</p>
            </div>
          </div>
        </div>

        {/* 3. Key Financial Metrics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Financial Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Average Monthly Credits"
              value={formatCurrency(props.analyticsData.averageMonthlyCredits)}
              icon={TrendingUp}
              color="green"
            />
            <StatCard 
              title="Average Monthly Debits"
              value={formatCurrency(props.analyticsData.averageMonthlyDebits)}
              icon={TrendingUp}
              color="red"
            />
            <StatCard 
              title="Average ABB Balance"
              value={formatCurrency(props.analyticsData.averageAbbBalance)}
              icon={IndianRupee}
              color="blue"
            />
            <StatCard 
              title="Existing EMI"
              value={formatCurrency(props.analyticsData.existingEmi)}
              icon={Calendar}
              color="orange"
              subtitle={props.analyticsData.dateOfEmi}
            />
          </div>
        </div>

        {/* 4. Credit Scores - Gauge Cluster */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Credit Score Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScoreGauge 
              title="Bureau Score" 
              score={props.analyticsData.bureauScore}
              maxScore={1000}
            />
            <ScoreGauge 
              title="Combined Score" 
              score={props.analyticsData.combinedScore}
              maxScore={1000}
            />
            <ScoreGauge 
              title="Metis Bank Score" 
              score={props.analyticsData.metisBankScore}
              maxScore={1000}
            />
            <ScoreGauge 
              title="Metis Bureau Score" 
              score={props.analyticsData.metisBureauScore}
              maxScore={1000}
            />
          </div>
          <div className="mt-4 flex justify-center">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                <span>Poor (0-400)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                <span>Fair (400-700)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span>Good (700-1000)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Risk Assessment */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              title="Cheque Bounces"
              value={props.analyticsData.chequeBounces}
              icon={props.analyticsData.chequeBounces === 0 ? CheckCircle : AlertTriangle}
              color={props.analyticsData.chequeBounces === 0 ? "green" : "red"}
            />
            <StatCard 
              title="Credit Card Usage"
              value={props.analyticsData.creditCardUsage}
              icon={CreditCard}
              color="blue"
            />
            <StatCard 
              title="Enquiries (12 Months)"
              value={props.analyticsData.enquiriesInLast12Months}
              icon={Activity}
              color={props.analyticsData.enquiriesInLast12Months === 0 ? "green" : "yellow"}
            />
          </div>
        </div>

        {/* 6. Loan Analysis */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Loan Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Loan Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount:</span>
                  <span className="font-semibold">{formatCurrency(props.analyticsData.loan_amount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="font-semibold">{(props.analyticsData.interest_rate * 100)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Loans:</span>
                  <span className="font-semibold">{props.analyticsData.activeLoanCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shortest Tenure:</span>
                  <span className="font-semibold">{props.analyticsData.shortestLoanTenure} months</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Capacity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Loan Amount:</span>
                  <span className="font-semibold text-green-600">{formatCurrency(props.analyticsData.maxLoanAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Min Loan Amount:</span>
                  <span className="font-semibold">{formatCurrency(props.analyticsData.minLoanAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max EMI:</span>
                  <span className="font-semibold text-green-600">{formatCurrency(props.analyticsData.maxEmi)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Min EMI:</span>
                  <span className="font-semibold">{formatCurrency(props.analyticsData.minEmi)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration Range:</span>
                  <span className="font-semibold">{props.analyticsData.min_loan_duration} - {props.analyticsData.max_loan_duration} months</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Remarks */}
        <div className="bg-white rounded-lg shadow-md border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            Remarks
          </h2>
          <div className="space-y-4">
            {props.analyticsData.remarks ? (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800">{props.analyticsData.remarks}</p>
              </div>
            ) : (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-gray-600">No additional remarks available</p>
              </div>
            )}
            
            {props.analyticsData.bankRemark && (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-1">Bank Remarks:</h4>
                <p className="text-yellow-700">{props.analyticsData.bankRemark}</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <h4 className="font-medium text-green-800 mb-1">Positive Indicators:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  {props.analyticsData.chequeBounces === 0 && <li>• No cheque bounces</li>}
                  {props.analyticsData.enquiriesInLast12Months === 0 && <li>• No recent credit enquiries</li>}
                  {props.analyticsData.highestDpdInLast12Months === null && <li>• No payment delays</li>}
                </ul>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <h4 className="font-medium text-blue-800 mb-1">Summary:</h4>
                <p className="text-sm text-blue-700">
                  Customer shows {props.analyticsData.combinedScore >= 700 ? 'excellent' : props.analyticsData.combinedScore >= 400 ? 'moderate' : 'poor'} creditworthiness with 
                  {' '}{props.analyticsData.activeLoanCount} active loan(s) and stable financial behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAnalytics;

