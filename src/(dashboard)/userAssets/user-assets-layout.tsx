import { AssetsTabs } from "./components/assets-tabs";

export const UserAssetsLayout = () => {
  return (
    <div className="h-full flex-1 flex-col space-y-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <span>
          <h1 className="text-3xl font-bold tracking-tight">Assets</h1>
          <p className="text-muted-foreground">
            Supported Cryptocurrencies for Transfer
          </p>
        </span>
      </div>
      {/* Assets Table */}
      <AssetsTabs />
    </div>
  );
};
