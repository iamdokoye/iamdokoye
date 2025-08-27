# ESLint Technical Debt - To Fix Later

## Rules Temporarily Disabled

### @typescript-eslint/no-explicit-any
- **File**: `src/components/ApiPlayground.tsx:28`
- **Reason**: Need to understand API response structure better
- **Priority**: Medium
- **Target Fix Date**: 2024-02-15

### @typescript-eslint/no-empty-object-type  
- **Files**: 
  - `src/components/ui/command.tsx:24`
  - `src/components/ui/textarea.tsx:5`
- **Reason**: Shadcn/ui component patterns, need to research proper typing
- **Priority**: Low
- **Target Fix Date**: 2024-03-01

## Action Plan
1. Research API response schemas
2. Consult shadcn/ui documentation for proper typing patterns
3. Schedule refactoring session