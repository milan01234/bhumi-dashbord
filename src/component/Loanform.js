
//////// New Code ////////////

// import React, { useState } from 'react';
// import { DollarSign, Calendar, Percent, CheckCircle } from 'lucide-react';

// const LoanForm = (props) => {
//   const [errors, setErrors] = useState({});
//   const [focusedField, setFocusedField] = useState('');

//   const validateField = (name, value) => {
//     const newErrors = { ...errors };
    
//     switch (name) {
//       case 'loanAmount':
//         if (!value || value <= 0) {
//           newErrors[name] = 'Loan amount must be greater than 0';
//         } else if (value > 1000000) {
//           newErrors[name] = 'Loan amount cannot exceed $1,000,000';
//         } else {
//           delete newErrors[name];
//         }
//         break;
//       case 'minLoanDuration':
//         if (!value || value < 1) {
//           newErrors[name] = 'Minimum duration must be at least 1 month';
//         } else if (value > 360) {
//           newErrors[name] = 'Duration cannot exceed 360 months';
//         } else {
//           delete newErrors[name];
//         }
//         break;
//       case 'maxLoanDuration':
//         if (!value || value < 1) {
//           newErrors[name] = 'Maximum duration must be at least 1 month';
//         } else if (value > 360) {
//           newErrors[name] = 'Duration cannot exceed 360 months';
//         } else if (props.loanformData.minLoanDuration && value < props.loanformData.minLoanDuration) {
//           newErrors[name] = 'Maximum duration must be greater than minimum';
//         } else {
//           delete newErrors[name];
//         }
//         break;
//       case 'interestRate':
//         if (!value || value <= 0) {
//           newErrors[name] = 'Interest rate must be greater than 0';
//         } else if (value > 50) {
//           newErrors[name] = 'Interest rate seems unusually high';
//         } else {
//           delete newErrors[name];
//         }
//         break;
//     }
    
//     setErrors(newErrors);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     props.setloanFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     if (value) {
//       validateField(name, parseFloat(value));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Validate all fields
//     Object.keys(props.loanformData).forEach(key => {
//       validateField(key, props.loanformData[key]);
//     });
    
//     if (Object.keys(errors).length === 0) {
//       console.log('Form submitted:', props.loanformData);
//       // You can send the formData to backend here
//     }
//   };

//   const formatCurrency = (value) => {
//     if (!value) return '';
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0
//     }).format(value);
//   };

//   const FormField = ({ icon: Icon, label, name, type = "number", step, suffix, prefix, placeholder }) => {
//     const hasError = errors[name];
//     const isFocused = focusedField === name;
//     const hasValue = props.loanformData[name];

//     return (
//       <div className="mb-6">
//         <label className="block text-sm font-semibold text-gray-700 mb-2">
//           {label}
//         </label>
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <Icon className={`h-5 w-5 transition-colors ${
//               hasError ? 'text-red-400' : 
//               isFocused ? 'text-blue-500' : 
//               hasValue ? 'text-green-500' : 'text-gray-400'
//             }`} />
//           </div>
//           <input
//             type={type}
//             step={step}
//             name={name}
//             value={props.loanformData[name] || ''}
//             onChange={handleChange}
//             onFocus={() => setFocusedField(name)}
//             onBlur={() => setFocusedField('')}
//             placeholder={placeholder}
//             className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl text-lg font-medium transition-all duration-200 focus:outline-none ${
//               hasError 
//                 ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
//                 : isFocused 
//                 ? 'border-blue-500 bg-blue-50 focus:ring-4 focus:ring-blue-100'
//                 : hasValue
//                 ? 'border-green-300 bg-green-50 hover:border-green-400'
//                 : 'border-gray-200 bg-white hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
//             }`}
//             required
//           />
//           {hasValue && !hasError && (
//             <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//               <CheckCircle className="h-5 w-5 text-green-500" />
//             </div>
//           )}
//         </div>
//         {hasError && (
//           <p className="mt-2 text-sm text-red-600 flex items-center">
//             <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mr-2">!</span>
//             {hasError}
//           </p>
//         )}
//         {name === 'loanAmount' && hasValue && !hasError && (
//           <p className="mt-2 text-sm text-gray-600">
//             Formatted: {formatCurrency(props.loanformData[name])}
//           </p>
//         )}
//       </div>
//     );
//   };

//   const isFormValid = Object.keys(errors).length === 0 && 
//     props.loanformData.loanAmount && 
//     props.loanformData.minLoanDuration && 
//     props.loanformData.maxLoanDuration && 
//     props.loanformData.interestRate;

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
//           <h2 className="text-2xl font-bold text-white flex items-center">
//             Loan Application Details
//           </h2>
//           <p className="text-blue-100 mt-2">Please provide your loan requirements below</p>
//         </div>

//         {/* Form */}
//         <div className="px-8 py-8">
//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="md:col-span-2">
//               <FormField
//                 icon={DollarSign}
//                 label="Loan Amount"
//                 name="loanAmount"
//                 placeholder="Enter loan amount"
//               />
//             </div>
            
//             <FormField
//               icon={Calendar}
//               label="Minimum Duration"
//               name="minLoanDuration"
//               placeholder="Months"
//             />
            
//             <FormField
//               icon={Calendar}
//               label="Maximum Duration"
//               name="maxLoanDuration"
//               placeholder="Months"
//             />
            
//             <div className="md:col-span-2">
//               <FormField
//                 icon={Percent}
//                 label="Annual Interest Rate"
//                 name="interestRate"
//                 step="0.01"
//                 placeholder="Enter interest rate"
//               />
//             </div>
//           </div>

//           {/* Summary Card */}
//           {props.loanformData.loanAmount && props.loanformData.interestRate && (
//             <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
//               <h4 className="text-lg font-semibold text-gray-800 mb-4">Loan Summary</h4>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                 <div>
//                   <p className="text-gray-600">Amount</p>
//                   <p className="font-bold text-lg text-gray-800">
//                     {formatCurrency(props.loanformData.loanAmount)}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Duration Range</p>
//                   <p className="font-bold text-lg text-gray-800">
//                     {props.loanformData.minLoanDuration || 0} - {props.loanformData.maxLoanDuration || 0} months
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Interest Rate</p>
//                   <p className="font-bold text-lg text-gray-800">
//                     {props.loanformData.interestRate}% APR
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Est. Monthly Payment</p>
//                   <p className="font-bold text-lg text-gray-800">
//                     {props.loanformData.loanAmount && props.loanformData.maxLoanDuration && props.loanformData.interestRate
//                       ? formatCurrency(
//                           (props.loanformData.loanAmount * (props.loanformData.interestRate / 100 / 12)) /
//                           (1 - Math.pow(1 + (props.loanformData.interestRate / 100 / 12), -props.loanformData.maxLoanDuration))
//                         )
//                       : '$--'
//                     }
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Submit Button */}
//           <div className="mt-8 flex flex-col sm:flex-row gap-4">
//             <button
//               type="button"
//               onClick={handleSubmit}
//               disabled={!isFormValid}
//               className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
//                 isFormValid
//                   ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
//                   : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//               }`}
//             >
//               {isFormValid ? 'Submit Application' : 'Complete All Fields'}
//             </button>
//             <button
//               type="button"
//               onClick={() => {
//                 props.setloanFormData({
//                   loanAmount: '',
//                   minLoanDuration: '',
//                   maxLoanDuration: '',
//                   interestRate: ''
//                 });
//                 setErrors({});
//               }}
//               className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
//             >
//               Clear Form
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoanForm;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { Calendar, Percent, CheckCircle } from 'lucide-react';

// const LoanForm = (props) => {
//   const [errors, setErrors] = useState({});
//   const [focusedField, setFocusedField] = useState('');

//   const validateField = (name, value) => {
//     const newErrors = { ...errors };

//     switch (name) {
//       case 'loanAmount':
//         if (!value || value <= 0) {
//           newErrors[name] = 'Loan amount must be greater than 0';
//         } else if (value > 10000000) {
//           newErrors[name] = 'Loan amount cannot exceed ₹1,00,00,000';
//         } else {
//           delete newErrors[name];
//         }
//         break;
//       case 'minLoanDuration':
//         if (!value || value < 1) {
//           newErrors[name] = 'Minimum duration must be at least 1 month';
//         } else if (value > 360) {
//           newErrors[name] = 'Duration cannot exceed 360 months';
//         } else {
//           delete newErrors[name];
//         }
//         break;
//       case 'maxLoanDuration':
//         if (!value || value < 1) {
//           newErrors[name] = 'Maximum duration must be at least 1 month';
//         } else if (value > 360) {
//           newErrors[name] = 'Duration cannot exceed 360 months';
//         } else if (props.loanformData.minLoanDuration && value < props.loanformData.minLoanDuration) {
//           newErrors[name] = 'Maximum duration must be greater than minimum';
//         } else {
//           delete newErrors[name];
//         }
//         break;
//       case 'interestRate':
//         if (!value || value <= 0) {
//           newErrors[name] = 'Interest rate must be greater than 0';
//         } else if (value > 50) {
//           newErrors[name] = 'Interest rate seems unusually high';
//         } else {
//           delete newErrors[name];
//         }
//         break;
//     }

//     setErrors(newErrors);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     props.setloanFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     if (value) {
//       validateField(name, parseFloat(value));
//     }
//   };

//   const formatCurrency = (value) => {
//     if (!value) return '';
//     return `₹${Number(value).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
//   };

//   const FormField = ({ label, name, type = "number", step, placeholder }) => {
//     const hasError = errors[name];
//     const isFocused = focusedField === name;
//     const hasValue = props.loanformData[name];

//     return (
//       <div className="mb-3">
//         <label className="block text-xs font-medium text-gray-700 mb-1">
//           {label}
//         </label>
//         <div className="relative">
//           <input
//             type={type}
//             step={step}
//             name={name}
//             value={props.loanformData[name] || ''}
//             onChange={handleChange}
//             onFocus={() => setFocusedField(name)}
//             onBlur={() => setFocusedField('')}
//             placeholder={placeholder}
//             className={`w-full px-3 py-1.5 text-sm border rounded-lg font-medium focus:outline-none transition-all ${
//               hasError
//                 ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-100'
//                 : isFocused
//                 ? 'border-blue-500 bg-blue-50 focus:ring-1 focus:ring-blue-100'
//                 : hasValue
//                 ? 'border-green-300 bg-green-50 hover:border-green-400'
//                 : 'border-gray-200 bg-white hover:border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-100'
//             }`}
//           />
//           {hasValue && !hasError && (
//             <div className="absolute inset-y-0 right-2 flex items-center">
//               <CheckCircle className="h-4 w-4 text-green-500" />
//             </div>
//           )}
//         </div>
//         {hasError && (
//           <p className="mt-1 text-xs text-red-600">{hasError}</p>
//         )}
//         {name === 'loanAmount' && hasValue && !hasError && (
//           <p className="mt-1 text-xs text-gray-600">
//             Formatted: {formatCurrency(props.loanformData[name])}
//           </p>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-md mx-auto p-3">
//       <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3">
//           <h2 className="text-base font-semibold text-white">Loan Application</h2>
//         </div>

//         <div className="px-4 py-4">
//           <div className="grid gap-3 md:grid-cols-2">
//             <div className="md:col-span-2">
//               <FormField
//                 label="Loan Amount (₹)"
//                 name="loanAmount"
//                 placeholder="Enter amount in rupees"
//               />
//             </div>

//             <FormField
//               label="Minimum Duration"
//               name="minLoanDuration"
//               placeholder="Months"
//             />

//             <FormField
//               label="Maximum Duration"
//               name="maxLoanDuration"
//               placeholder="Months"
//             />

//             <div className="md:col-span-2">
//               <FormField
//                 label="Interest Rate (%)"
//                 name="interestRate"
//                 step="0.01"
//                 placeholder="Annual interest rate"
//               />
//             </div>
//           </div>

//           {props.loanformData.loanAmount && props.loanformData.interestRate && (
//             <div className="mt-5 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-md border border-gray-200">
//               <h4 className="text-xs font-semibold text-gray-800 mb-2">Loan Summary</h4>
//               <div className="grid grid-cols-2 gap-2 text-xs">
//                 <div>
//                   <p className="text-gray-600">Amount</p>
//                   <p className="font-bold text-sm text-gray-800">
//                     {formatCurrency(props.loanformData.loanAmount)}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Duration</p>
//                   <p className="font-bold text-sm text-gray-800">
//                     {props.loanformData.minLoanDuration || 0} - {props.loanformData.maxLoanDuration || 0} months
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Interest</p>
//                   <p className="font-bold text-sm text-gray-800">
//                     {props.loanformData.interestRate}% APR
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Monthly Payment</p>
//                   <p className="font-bold text-sm text-gray-800">
//                     {props.loanformData.loanAmount && props.loanformData.maxLoanDuration && props.loanformData.interestRate
//                       ? formatCurrency(
//                           (props.loanformData.loanAmount * (props.loanformData.interestRate / 100 / 12)) /
//                           (1 - Math.pow(1 + (props.loanformData.interestRate / 100 / 12), -props.loanformData.maxLoanDuration))
//                         )
//                       : '₹--'
//                     }
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Clear Form Button Only */}
//           <div className="mt-4 flex justify-end">
//             <button
//               type="button"
//               onClick={() => {
//                 props.setloanFormData({
//                   loanAmount: '',
//                   minLoanDuration: '',
//                   maxLoanDuration: '',
//                   interestRate: ''
//                 });
//                 setErrors({});
//               }}
//               className="px-4 py-2 border border-gray-300 text-sm text-gray-700 rounded-md font-medium hover:bg-gray-50"
//             >
//               Clear Form
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoanForm;




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';

const LoanForm = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setloanFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', props.loanformData);
    // Send to backend or handle further processing here
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-6 py-8 bg-yellow-500 border border-yellow-300 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Loan Details</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Loan Amount</label>
          <input
            type="number"
            name="loanAmount"
            value={props.loanformData.loanAmount}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Min Loan Duration (months)</label>
          <input
            type="number"
            name="minLoanDuration"
            value={props.loanformData.minLoanDuration}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Max Loan Duration (months)</label>
          <input
            type="number"
            name="maxLoanDuration"
            value={props.loanformData.maxLoanDuration}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Interest Rate (%)</label>
          <input
            type="number"
            step="0.01"
            name="interestRate"
            value={props.loanformData.interestRate}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </form>
    </div>
  );
};

export default LoanForm;
