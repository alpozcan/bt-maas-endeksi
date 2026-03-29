import { HighlightProvider } from './HighlightContext';
import Hero from './Hero';
import TrendChart from './TrendChart';
import RoleBar from './RoleBar';
import AIAdoption from './AIAdoption';
import CompanyTypeSalary from './CompanyTypeSalary';
import RoleBump from './RoleBump';
import RoleRadar from './RoleRadar';
import GlobalSalaryComparison from './GlobalSalaryComparison';
import DataIntegrity from './DataIntegrity';

export default function Dashboard() {
  return (
    <HighlightProvider>
      <Hero />
      <TrendChart />
      <RoleBar />
      <AIAdoption />
      <CompanyTypeSalary />
      <RoleBump />
      <GlobalSalaryComparison />
      <DataIntegrity />
      <RoleRadar />
    </HighlightProvider>
  );
}
