'use strict';
const assert=require('node:assert/strict');const {estimate,examples,selfTest}=require('../app.js');
const tests=selfTest();for(const t of tests)assert.equal(t.passed,true,t.name+': '+(t.error||''));
for(const c of Object.values(examples)){const r=estimate(c);assert.ok(Number.isFinite(r.budgetCostScenarioUSD));assert.equal(r.allocatedTokens+r.headroomTokens,r.contextCapacityTokens);assert.ok(!Object.hasOwn(r,'prompt'));}
assert.throws(()=>estimate({...examples.short,inputPrice:-1}));assert.throws(()=>estimate({...examples.short,context:NaN}));
console.log(JSON.stringify({tool:'prompt-token-budget-lab',builtInPassed:tests.length,fixtureScenarios:Object.keys(examples).length,extraAssertions:11}));
