package domain

// Config is an abstraction around the map that holds the config values
type Config struct {
	config map[string]interface{}
}

// SetFromBytes sets the internal config based on a byte array of YAML
func (c *Config) SetFromBytes(data []byte) error{

	return nil
}

// Get returns the config for a particular service
func (c *Config) Get(serviveName string) (map[string]interface{}, error) {
	return nil, nil
}
