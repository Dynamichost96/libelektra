#ifndef ELEKTRA_ERROR_HPP
#define ELEKTRA_ERROR_HPP

#include <vector>
#include "errors/warning.hpp"

namespace kdb
{
namespace tools
{

namespace errors
{

class Error : public BaseNotification
{
public:

	/* inherit constructors */
	using BaseNotification::BaseNotification;
	~Error();

	/* An Error can contain 0 to n warnings */
	void addWarning (Warning & warning);

	/* getters */
	kdb::long_t warningCount ();

	/* iterator functionality */
	std::vector<Warning*>::iterator begin() { return warnings.begin(); }
	std::vector<Warning*>::iterator end() { return warnings.end(); }
	std::vector<Warning*>::const_iterator begin() const { return warnings.begin(); }
	std::vector<Warning*>::const_iterator end() const { return warnings.begin(); }
	std::vector<Warning*>::const_iterator cbegin() const { return warnings.cbegin(); }
	std::vector<Warning*>::const_iterator cend() const { return warnings.cend(); }

	/* get warning by index */
	Warning& operator[](int index);

private:
	std::vector<Warning*> warnings;

protected:
	bool compare(const BaseNotification& other) const override;
};
} // namespace errors
} // namespace tools
} // namespace kdb

#endif // ELEKTRA_ERROR_HPP
